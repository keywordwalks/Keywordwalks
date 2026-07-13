<script setup lang="ts">
useSeoMeta({
  title: 'About — keywordwalks for bloggers, creators & SEO pros',
  description:
    'keywordwalks helps bloggers, content creators, and SEO professionals improve search visibility with private, on-page keyword research, SEO audits, and indexing checks in Chrome.',
})

const values = [
  {
    title: 'Built for publishers',
    body: 'Bloggers and creators get clear checks on titles, keywords, structure, and content quality before and after publishing.',
  },
  {
    title: 'Built for SEO pros',
    body: 'Consultants and in-house SEOs get technical indexability, scoring, history, compare, overlays, and client-ready PDF/JSON exports.',
  },
  {
    title: 'Private by default',
    body: 'Every audit runs in your browser. Drafts, staging URLs, and client sites never leave your machine for analysis.',
  },
]

const beliefs = [
  {
    step: '01',
    title: 'Keyword research where the page lives',
    body: 'Discover terms on the live DOM, set a target keyword, and verify placement across the signals that matter for ranking and relevance.',
  },
  {
    step: '02',
    title: 'On-page SEO you can act on',
    body: 'Metadata, headings, content depth, images, links, and schema become prioritized fixes with suggested changes and copy-ready snippets.',
  },
  {
    step: '03',
    title: 'Indexing and visibility, step by step',
    body: 'Catch technical blockers, track audits over time, and re-check until the page is healthier for crawl, index, and higher search visibility.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="hero-glow" aria-hidden="true" />
      <div class="container hero-inner">
        <Reveal as="p" class="eyebrow">About keywordwalks</Reveal>
        <Reveal as="h1" class="display" variant="blur" :delay="80">
          SEO tools for people<br />who publish and rank
        </Reveal>
        <Reveal as="p" class="lede" :delay="160">
          keywordwalks is designed primarily for bloggers, content creators, and SEO professionals
          who want to improve website search performance — with keyword research, on-page analysis,
          indexing checks, and actionable ranking insights inside Chrome.
        </Reveal>
      </div>
    </section>

    <section class="section">
      <div class="container story">
        <Reveal class="story-copy" variant="left">
          <p class="eyebrow">Our purpose</p>
          <h2>Help you increase visibility without cloud risk</h2>
          <p class="muted">
            Improving search rankings usually means juggling keyword research, metadata, page
            structure, technical SEO, and performance. keywordwalks brings those checks to the open
            tab: analyze the rendered page, identify issues that hurt indexing, optimize essential
            SEO metrics, and ship fixes with confidence.
          </p>
          <p class="muted">
            Whether you’re drafting a blog post, refining a landing page, or auditing a client site,
            you get insights into content quality, metadata, structure, performance, and other
            ranking signals — privately, on your machine.
          </p>
        </Reveal>
        <Reveal class="story-panel" variant="right" :delay="120" aria-hidden="true">
          <img src="/favicon.png" alt="" width="120" height="120" class="mark" />
          <p class="panel-label">KEYWORDS · RESEARCH · SEO</p>
          <p class="panel-line">Bloggers · Creators · SEO professionals</p>
        </Reveal>
      </div>
    </section>

    <section class="section values-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Who we serve</p>
          <h2>One extension, three core audiences</h2>
          <p>Same powerful audit — tuned language and workflows for how each audience ships work.</p>
        </Reveal>
        <div class="value-grid">
          <Reveal
            v-for="(item, index) in values"
            :key="item.title"
            as="article"
            class="value"
            :delay="index * 100"
          >
            <span class="value-index">0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">How we help you rank</p>
          <h2>Research. Optimize. Improve indexing.</h2>
          <p>
            Ranking isn’t a single score — it’s a path. keywordwalks walks that path with you on
            every page you open.
          </p>
        </Reveal>
        <ol class="beliefs">
          <Reveal
            v-for="(item, index) in beliefs"
            :key="item.step"
            as="li"
            variant="left"
            :delay="index * 110"
          >
            <span class="step">{{ item.step }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <Reveal class="cta-panel" variant="scale">
          <p class="eyebrow">Next step</p>
          <h2>See the full SEO toolkit</h2>
          <p class="muted">
            Explore sixteen analyzers, scoring, Fixes checklist, history, compare, overlays, and
            export — or install the extension and audit your first page.
          </p>
          <div class="cta-row">
            <NuxtLink to="/features" class="btn btn-primary">Explore features</NuxtLink>
            <NuxtLink to="/#get-started" class="btn btn-ghost">Get started</NuxtLink>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  position: relative;
  padding: 5.5rem 0 3rem;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 80% at 0% 0%, rgba(0, 232, 240, 0.12), transparent 55%),
    radial-gradient(ellipse 40% 50% at 100% 0%, rgba(124, 255, 107, 0.06), transparent 50%);
}

.hero-glow {
  position: absolute;
  inset: -10% 20% auto;
  height: 60%;
  background: radial-gradient(circle, rgba(0, 232, 240, 0.14), transparent 65%);
  filter: blur(20px);
  pointer-events: none;
  animation: pulse-line 8s ease-in-out infinite;
}

.hero-inner {
  position: relative;
}

.page-hero h1 {
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  margin: 0.85rem 0 1rem;
  background: linear-gradient(120deg, #f5feff 15%, #00e8f0 55%, #7cff6b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lede {
  max-width: 40rem;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.story {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem;
  align-items: center;
}

.story-copy h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.5rem);
  margin: 0.65rem 0 0.85rem;
}

.story-copy .muted + .muted {
  margin-top: 1rem;
}

.story-panel {
  padding: 2.25rem 1.75rem;
  border: 1px solid var(--border-strong);
  border-radius: 20px;
  background:
    radial-gradient(ellipse 80% 70% at 50% 0%, rgba(0, 232, 240, 0.12), transparent 60%),
    linear-gradient(160deg, rgba(10, 22, 24, 0.95), rgba(0, 0, 0, 0.85));
  text-align: center;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.mark {
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto 1.25rem;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(0, 232, 240, 0.25));
}

.panel-label {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.panel-line {
  color: var(--text-dim);
  font-size: 0.88rem;
}

.values-section {
  background: linear-gradient(180deg, transparent, rgba(0, 232, 240, 0.035), transparent);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.value {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-strong);
  transition: border-color 0.35s ease, transform 0.35s var(--ease-spring);
}

.value:hover {
  border-top-color: var(--accent);
  transform: translateY(-4px);
}

.value-index {
  display: block;
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.value h3 {
  font-size: 1.2rem;
  margin-bottom: 0.65rem;
}

.value p {
  color: var(--text-muted);
  font-size: 0.98rem;
}

.beliefs {
  list-style: none;
  margin: 0;
  padding: 0;
}

.beliefs :deep(li) {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  transition: background 0.3s ease, padding-left 0.35s var(--ease-out);
}

.beliefs :deep(li:last-child) {
  border-bottom: 1px solid var(--border);
}

.beliefs :deep(li:hover) {
  padding-left: 0.5rem;
  background: linear-gradient(90deg, rgba(0, 232, 240, 0.05), transparent);
}

.step {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
}

.beliefs h3 {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.beliefs p {
  color: var(--text-muted);
  max-width: 40rem;
}

.cta-panel {
  padding: 2.75rem 2rem;
  border: 1px solid var(--border);
  border-radius: 20px;
  background:
    radial-gradient(ellipse 70% 80% at 0% 0%, rgba(0, 232, 240, 0.1), transparent 55%),
    linear-gradient(160deg, rgba(10, 22, 24, 0.9), rgba(0, 0, 0, 0.7));
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.cta-panel h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.5rem);
  margin: 0.65rem 0 0.85rem;
  max-width: 28rem;
}

.cta-panel > .muted {
  max-width: 36rem;
  margin-bottom: 1.5rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 900px) {
  .story,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    padding: 2rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-glow {
    animation: none !important;
  }
}
</style>
