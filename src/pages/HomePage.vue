<script setup lang="ts">
import { generateSchema } from "../schema";
import { useSeo } from "../composables/useSeo";
import { articles } from "../content/articles";
import { siteConfig } from "../site.config";
import { slugify } from "../utils/slug";
import { t } from "../i18n";

useSeo({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  type: "website",
  jsonLd: generateSchema({
    url: siteConfig.url,
    path: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    html: "",
    type: "website",
  }),
});
</script>

<template>
  <main>
  <!-- HERO -->
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <p class="hero-label">{{ t.home.label }}</p>
          <h1 class="use-text-title">{{ t.home.title }}</h1>
          <p class="use-text-subtitle2 hero-subtitle">{{ t.home.subtitle }}</p>
          <div class="hero-badges">
            <span class="badge-chip">{{ t.home.badgeAiReady }}</span>
            <span class="badge-chip">{{ t.home.badgeSitemap }}</span>
            <span class="badge-chip">{{ t.home.badgeSchemaOrg }}</span>
            <span class="badge-chip">{{ t.home.badgeNoDb }}</span>
          </div>
          <div class="hero-cta">
            <RouterLink to="/features/url-api/" class="btn primary btn-large">{{ t.home.ctaStart }}</RouterLink>
            <a href="/blog/" class="btn btn-flat primary-text btn-large">{{ t.home.ctaGuide }}</a>
          </div>
        </div>
        <div class="col-lg-5 text-center mt-4 mt-lg-0">
          <div class="hero-stat-card">
            <div class="hero-stat-number">10–30s</div>
            <div class="hero-stat-label">{{ t.home.statTtfbLabel }}</div>
          </div>
          <div class="hero-stat-card mt-3">
            <div class="hero-stat-number">50+</div>
            <div class="hero-stat-label">{{ t.home.statPagesLabel }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ANSWER-FIRST -->
  <section class="space-top-short">
    <div class="container">
      <div class="answer-block">
        <p class="use-text-subtitle2 text-center">{{ t.home.answerFirst }}</p>
      </div>
    </div>
  </section>

  <!-- KEY FACTS -->
  <section class="space-top-short">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <h2 class="use-text-title2">{{ t.home.keyFactsTitle }}</h2>
          <p class="use-text-subtitle2">{{ t.home.keyFactsDesc }}</p>
        </div>
        <div class="col-lg-7">
          <div class="facts-grid">
            <div class="counter-item">
              <div class="counter-number">0</div>
              <div class="counter-text">{{ t.home.fact0 }}</div>
            </div>
            <div class="counter-item">
              <div class="counter-number">100%</div>
              <div class="counter-text">{{ t.home.fact100pct }}</div>
            </div>
            <div class="counter-item">
              <div class="counter-number">51</div>
              <div class="counter-text">{{ t.home.fact51 }}</div>
            </div>
            <div class="counter-item">
              <div class="counter-number">68KB</div>
              <div class="counter-text">{{ t.home.fact68kb }}</div>
            </div>
            <div class="counter-item">
              <div class="counter-number">10</div>
              <div class="counter-text">{{ t.home.fact10 }}</div>
            </div>
            <div class="counter-item">
              <div class="counter-number">2.8s</div>
              <div class="counter-text">{{ t.home.fact28s }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED SNIPPET + COMPARISON -->
  <section class="space-top-short bg-muted">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="use-text-title2">{{ t.home.whatIsTitle }}</h3>
          <div class="featured-snippet">
            <p>{{ t.home.whatIsText }}</p>
          </div>
        </div>
        <div class="col-lg-6">
          <h3 class="use-text-title2">{{ t.home.comparisonTitle }}</h3>
          <div class="table-responsive">
            <table class="table striped">
              <thead><tr><th>{{ t.home.comparisonParam }}</th><th>{{ t.home.comparisonWordPress }}</th><th>{{ siteConfig.name }}</th></tr></thead>
              <tbody>
                <tr><td>{{ t.home.comparisonRowDb }}</td><td>{{ t.home.comparisonRowDbWp }}</td><td><strong>{{ t.home.comparisonRowDbCms }}</strong></td></tr>
                <tr><td>{{ t.home.comparisonRowSpeed }}</td><td>{{ t.home.comparisonRowSpeedWp }}</td><td><strong>{{ t.home.comparisonRowSpeedCms }}</strong></td></tr>
                <tr><td>{{ t.home.comparisonRowJsonLd }}</td><td>{{ t.home.comparisonRowJsonLdWp }}</td><td><strong>{{ t.home.comparisonRowJsonLdCms }}</strong></td></tr>
                <tr><td>{{ t.home.comparisonRowVersion }}</td><td>{{ t.home.comparisonRowVersionWp }}</td><td><strong>{{ t.home.comparisonRowVersionCms }}</strong></td></tr>
                <tr><td>{{ t.home.comparisonRowHosting }}</td><td>{{ t.home.comparisonRowHostingWp }}</td><td><strong>{{ t.home.comparisonRowHostingCms }}</strong></td></tr>
                <tr><td>{{ t.home.comparisonRowSecurity }}</td><td>{{ t.home.comparisonRowSecurityWp }}</td><td><strong>{{ t.home.comparisonRowSecurityCms }}</strong></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="space-top-short">
    <div class="container">
      <h2 class="use-text-title2 text-center mb-5">{{ t.home.howItWorksTitle }}</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card step-card">
            <div class="step-number">1</div>
            <h4>{{ t.home.step1Title }}</h4>
            <p>{{ t.home.step1Desc }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card step-card">
            <div class="step-number">2</div>
            <h4>{{ t.home.step2Title }}</h4>
            <p>{{ t.home.step2Desc }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card step-card">
            <div class="step-number">3</div>
            <h4>{{ t.home.step3Title }}</h4>
            <p>{{ t.home.step3Desc }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card step-card">
            <div class="step-number">4</div>
            <h4>{{ t.home.step4Title }}</h4>
            <p>{{ t.home.step4Desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LATEST ARTICLES -->
  <section class="space-top-short bg-muted">
    <div class="container">
      <h2 class="use-text-title2 mb-4">{{ t.home.latestArticles }}</h2>
      <div class="row">
        <div v-for="item in articles.slice(0, 6)" :key="item.frontmatter.slug" class="col-md-6 col-lg-4 mb-3">
          <div class="card article-card">
            <h3>
              <RouterLink :to="`/blog/${item.frontmatter.slug}/`">
                {{ item.frontmatter.title }}
              </RouterLink>
            </h3>
            <p class="card-desc">{{ item.frontmatter.description }}</p>
            <div class="card-meta">
              <span>{{ item.frontmatter.date }}</span>
              <span class="meta-sep">{{ item.readingTime }} min read</span>
              <RouterLink
                v-if="item.frontmatter.category"
                :to="`/category/${slugify(item.frontmatter.category)}/`"
                class="meta-link"
              >{{ item.frontmatter.category }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <RouterLink to="/blog/" class="btn primary">{{ t.home.allArticles }}</RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section text-center">
    <div class="container">
      <h2 class="use-text-title2 cta-title">{{ t.home.ctaTitle }}</h2>
      <p class="use-text-subtitle2 cta-desc">{{ t.home.ctaDesc }}</p>
      <div class="cta-buttons">
        <RouterLink to="/pricing/" class="btn primary btn-large me-3">{{ t.home.ctaRepo }}</RouterLink>
        <RouterLink to="/docs/getting-started/" class="btn secondary btn-large">{{ t.home.ctaDeployGuide }}</RouterLink>
      </div>
    </div>
  </section>
  </main>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #304ffe 100%);
  color: #fff;
  padding: 80px 0 60px;
}
.hero-section .use-text-title { color: #fff; }
.hero-section .use-text-subtitle2 { color: rgba(255,255,255,0.85); }
.hero-label {
  color: var(--color-accent-light);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.9;
}
.hero-subtitle { max-width: 600px; margin-bottom: 24px; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.badge-chip {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 20px;
  color: rgba(255,255,255,0.9);
  font-size: 13px;
  padding: 6px 16px;
}
.hero-cta { display: flex; align-items: center; gap: 12px; }
.hero-cta .primary-text { color: var(--color-accent-light) !important; }
.hero-stat-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 20px;
  text-align: left;
}
.hero-stat-number { color: var(--color-accent-light); font-size: 36px; font-weight: 700; }
.hero-stat-label { color: rgba(255,255,255,0.7); font-size: 14px; }

.answer-block {
  background: #e8eaf6;
  border-radius: 12px;
  padding: 40px 32px;
}

.space-top-short { padding: 64px 0; }
.bg-muted { background: var(--color-bg-muted); }

.facts-grid { display: grid; gap: 12px; grid-template-columns: repeat(2, 1fr); }
.counter-item {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
}
.counter-number { color: var(--color-accent); font-size: 28px; font-weight: 800; margin-bottom: 4px; }
.counter-text { color: #666; font-size: 14px; line-height: 1.4; }

.featured-snippet {
  background: #fff;
  border-left: 4px solid var(--color-accent);
  border-radius: 0 8px 8px 0;
  padding: 20px;
}
.featured-snippet p { font-size: 15px; line-height: 1.6; margin: 0; }

.step-card { border: 1px solid #e0e0e0; border-radius: 10px; padding: 24px; height: 100%; }
.step-number {
  background: var(--color-accent);
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  margin-bottom: 12px;
  width: 40px;
}
.step-card h4 { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
.step-card p { color: #666; font-size: 14px; line-height: 1.5; }

.article-card { border: 1px solid #e0e0e0; border-radius: 8px; height: 100%; padding: 20px; }
.article-card h3 { font-size: 16px; margin: 0 0 6px; }
.article-card h3 a { color: #333; text-decoration: none; }
.article-card h3 a:hover { color: var(--color-accent); }
.card-desc { color: #666; font-size: 13px; margin: 0 0 8px; }
.card-meta { color: #999; font-size: 12px; }
.meta-sep { margin-left: 10px; }
.meta-link { color: var(--color-accent); margin-left: 10px; text-decoration: none; }
.meta-link:hover { text-decoration: underline; }

.cta-section {
  background: linear-gradient(135deg, #1a237e 0%, #304ffe 100%);
  color: #fff;
  padding: 64px 0;
}
.cta-title { color: #fff; }
.cta-desc { color: rgba(255,255,255,0.8); margin-bottom: 24px; }
.cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }
</style>
