import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import hljs from "highlight.js";
import { sanitizerOptions } from "./sanitize-config.mjs";
import { slugify } from "./shared/slugify.mjs";

const rootDir = join(import.meta.dirname, "..");
const outputDir = join(rootDir, "src", "generated");

const markdown = new MarkdownIt({
  html: true, linkify: true, typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try { return hljs.highlight(str, { language: lang }).value; } catch {}
    }
    return markdown.utils.escapeHtml(str);
  },
});

function normalizeStringArray(value) {
  return Array.isArray(value) ? value.map(String) : [];
}

function extractBlocks(rawContent) {
  const blocks = {};
  const markerRegex = /<!--\s*@block:\s*(\S+)\s*-->/gi;
  const parts = rawContent.split(markerRegex);
  for (let i = 1; i < parts.length; i += 2) {
    const name = parts[i];
    const content = (parts[i + 1] ?? "").trim();
    if (!content) { blocks[name] = ""; continue; }
    const rendered = markdown.render(content);
    blocks[name] = sanitizeHtml(rendered, sanitizerOptions);
  }
  return blocks;
}

function extractFaq(body, blocks) {
  const hasFaq = blocks.faq || body.match(/###?\s*FAQ/i) || body.match(/<!--\s*@block:\s*faq\s*-->/i);
  if (!hasFaq) return [];
  const items = [];
  const qaRegex = /\*\*Q:\s*(.+?)\*\*\s*([\s\S]*?)(?=\*\*Q:\s*|$)/gi;
  let match;
  while ((match = qaRegex.exec(body)) !== null) {
    items.push({
      question: match[1].trim(),
      answer: match[2].replace(/^\s*\*\*A:\s*\*\*?\s*/i, "").trim(),
    });
  }
  return items;
}

const markdownCache = new Map();

function toContentFile(absolutePath, relativePath) {
  const source = readFileSync(absolutePath, "utf8");
  const parsed = matter(source);
  const frontmatter = parsed.data;
  const filename = absolutePath.split(/[/\\]/).pop();
  const slug = String(
    frontmatter.slug || slugify(frontmatter.title || filename.replace(/\.md$/, "")),
  ).trim();

  if (slug && !/^[a-z0-9-]+$/.test(slug)) {
    console.warn(`Warning: slug "${slug}" in ${relativePath} contains invalid characters`);
  }

  const blocks = extractBlocks(parsed.content);
  const faqItems = extractFaq(parsed.content, blocks);
  const bodyWithoutBlocks = parsed.content.replace(/<!--\s*@block:\s*\S+\s*-->/g, "");

  const cacheKey = `${relativePath}:${bodyWithoutBlocks.length}`;
  let html = markdownCache.get(cacheKey);
  if (!html) {
    const unsafeHtml = markdown.render(bodyWithoutBlocks);
    html = sanitizeHtml(unsafeHtml, sanitizerOptions);
    markdownCache.set(cacheKey, html);
    if (markdownCache.size > 500) {
      let evicted = 0;
      for (const key of markdownCache.keys()) { markdownCache.delete(key); if (++evicted >= 100) break; }
    }
  }

  const wordCount = bodyWithoutBlocks.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));
  const isRawHtml = frontmatter.raw_html === true;

  return {
    path: relativePath,
    frontmatter: {
      ...parsed.data,
      title: String(frontmatter.title ?? ""),
      description: String(frontmatter.description ?? ""),
      slug,
      date: String(frontmatter.date ?? ""),
      image: String(frontmatter.image ?? ""),
      layout: String(frontmatter.layout ?? "article"),
      section: String(frontmatter.section ?? ""),
      updated: frontmatter.updated ? String(frontmatter.updated) : undefined,
      author: String(frontmatter.author ?? "PixInLink"),
      category: String(frontmatter.category ?? "General"),
      tags: normalizeStringArray(frontmatter.tags),
      schema_type: String(frontmatter.schema_type ?? "Article"),
      cover_image: frontmatter.cover_image ? String(frontmatter.cover_image) : undefined,
      geo: normalizeStringArray(frontmatter.geo),
      raw_html: frontmatter.raw_html,
    },
    html,
    rawHtml: isRawHtml ? parsed.content.trim() : undefined,
    blocks,
    faqItems,
    readingTime,
  };
}

function getLocale() {
  return process.env.VITE_LOCALE || "ru";
}

/**
 * PixInLink-specific content walker.
 * content/ru/ subdirectories: about/, blog/, contact/, docs/, features/,
 *   integrations/, legal/, pricing/, use-cases/
 * Each subdirectory is treated as a "section". index.md = section landing page.
 */
function walkContent(locale) {
  const localeDir = join(rootDir, "content", locale);
  if (!existsSync(localeDir)) return [];

  const results = [];
  const skipDirs = new Set(["templates"]);

  for (const entry of readdirSync(localeDir)) {
    const fullPath = join(localeDir, entry);
    const st = statSync(fullPath);

    if (st.isFile() && entry.endsWith(".md")) {
      const relPath = relative(rootDir, fullPath).replace(/\\/g, "/");
      results.push({ ...toContentFile(fullPath, relPath), section: "root", isIndex: false });
      continue;
    }

    if (!st.isDirectory() || skipDirs.has(entry)) continue;

    const sectionName = entry;
    walkSection(fullPath, sectionName);
  }

  function walkSection(dir, section) {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      const st = statSync(fullPath);
      if (st.isFile() && entry.endsWith(".md")) {
        const relPath = relative(rootDir, fullPath).replace(/\\/g, "/");
        const isIndex = entry === "index.md";
        results.push({ ...toContentFile(fullPath, relPath), section, isIndex });
      } else if (st.isDirectory()) {
        walkSection(fullPath, section);
      }
    }
  }

  return results;
}

function generateContentFiles(locale) {
  const allPages = walkContent(locale);

  const blogArticles = allPages
    .filter((p) => p.section === "blog")
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  const staticPages = allPages.filter((p) => p.section !== "blog");

  mkdirSync(outputDir, { recursive: true });

  // articles.ts
  writeFileSync(
    join(outputDir, "articles.ts"),
    `/* This file is generated by scripts/generate-content.mjs. */\n` +
      `export const articles = ${JSON.stringify(blogArticles, null, 2)} as const;\n`,
    "utf8",
  );

  // pages.ts
  writeFileSync(
    join(outputDir, "pages.ts"),
    `/* This file is generated by scripts/generate-content.mjs. */\n` +
      `export const pages = ${JSON.stringify(staticPages, null, 2)} as const;\n`,
    "utf8",
  );

  // all-pages.ts — full data with section metadata
  writeFileSync(
    join(outputDir, "all-pages.ts"),
    `/* This file is generated by scripts/generate-content.mjs. */\n` +
      `export const allPages = ${JSON.stringify(allPages, null, 2)} as const;\n`,
    "utf8",
  );

  // all-pages.json — read by generate-site-tree.mjs
  writeFileSync(
    join(outputDir, "all-pages.json"),
    JSON.stringify(allPages, null, 2),
    "utf8",
  );

  console.log(
    `Generated: ${blogArticles.length} articles, ${staticPages.length} pages.`,
  );

  markdownCache.clear();
}

const locale = getLocale();
generateContentFiles(locale);
