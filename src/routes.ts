import type { RouteRecordRaw } from "vue-router";
import { articles } from "./content/articles";
import { pages } from "./content/pages";
import ArticlePage from "./pages/ArticlePage.vue";
import BlogIndex from "./pages/BlogIndex.vue";
import CategoryPage from "./pages/CategoryPage.vue";
import PageView from "./pages/PageView.vue";
import NotFound from "./pages/NotFound.vue";
import TagPage from "./pages/TagPage.vue";
import { slugify } from "./utils/slug";

const uniqueCategories = [
  ...new Set(articles.map((a) => slugify(a.frontmatter.category))),
];

const uniqueTags = [
  ...new Set(articles.flatMap((a) => a.frontmatter.tags.map((t) => slugify(t)))),
];

const homePage = pages.find((p) => p.section === "home" && p.isIndex);
const nonHomePages = pages.filter((p) => p.section !== "home");

export const routes: RouteRecordRaw[] = [
  ...(homePage ? [{ path: "/", component: PageView, props: { slug: homePage.frontmatter.slug } }] : []),
  { path: "/blog/", component: BlogIndex },
  ...Array.from({ length: Math.max(0, Math.ceil(articles.length / 5) - 1) }, (_, i) => ({
    path: `/blog/page/${i + 2}/`, component: BlogIndex, props: { page: i + 2 },
  })),
  ...articles.map(article => ({
    path: `/blog/${article.frontmatter.slug}/`, component: ArticlePage, props: { slug: article.frontmatter.slug },
  })),
  ...uniqueCategories.map(slug => ({
    path: `/category/${slug}/`, component: CategoryPage, props: { slug },
  })),
  ...uniqueTags.map(slug => ({
    path: `/tag/${slug}/`, component: TagPage, props: { slug },
  })),
  ...nonHomePages.map(page => ({
    path: `/${page.frontmatter.slug}/`, component: PageView, props: { slug: page.frontmatter.slug },
  })),
  { path: "/:pathMatch(.*)*", component: NotFound },
];
