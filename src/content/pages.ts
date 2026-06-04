import { pages as generatedPages } from "../generated/pages";
import type { ArticleFrontmatter } from "./articles";

export interface Page {
  path: string;
  frontmatter: ArticleFrontmatter;
  html: string;
  blocks: Record<string, string>;
  readingTime: number;
  section: string;
  isIndex?: boolean;
}

export const pages: Page[] = generatedPages.map((page) => ({
  path: page.path,
  frontmatter: {
    ...page.frontmatter,
    tags: [...(page.frontmatter.tags || [])],
    geo: page.frontmatter.geo ? [...page.frontmatter.geo] : undefined,
  },
  html: page.html,
  blocks: { ...page.blocks },
  readingTime: page.readingTime,
  section: page.section || "",
  isIndex: page.isIndex ?? false,
}));

export function findPageBySlug(slug: string): Page | undefined {
  return pages.find((page) => page.frontmatter.slug === slug);
}
