<script setup lang="ts">
useSeoMeta({
  title: 'keywordwalks — SEO tools for bloggers, creators & SEO pros',
  description:
    'Chrome extension for bloggers, content creators, and SEO professionals. Keyword research, on-page SEO, indexing issues, and ranking signals — analyzed locally in your browser.',
})

const audiences = [
  {
    title: 'Bloggers',
    body: 'Check titles, meta, headings, keyword placement, and readability before you publish — then re-audit after edits.',
  },
  {
    title: 'Content creators',
    body: 'See content depth, structure, images, schema, and social previews so every page is ready to rank and share.',
  },
  {
    title: 'SEO professionals',
    body: 'Run technical and indexability checks, compare audits over time, export PDF/JSON, and ship prioritized fixes.',
  },
]

const outcomes = [
  {
    title: 'Keyword research on the live page',
    body: 'Discover top terms, bigrams, and trigrams. Set a target keyword plus secondary terms and see placement across title, meta, URL, H1/H2, first 100 words, and image alts.',
  },
  {
    title: 'On-page SEO that ranks',
    body: 'Audit metadata, page structure, content quality, internal links, and structured data with actionable recommendations — not vague advice.',
  },
  {
    title: 'Indexing & technical health',
    body: 'Catch noindex risks, canonical and robots issues, robots.txt/sitemap peeks, hreflang problems, and other blockers that hurt crawlability.',
  },
  {
    title: 'Performance & ranking signals',
    body: 'Review lab Core Web Vitals (LCP, CLS, INP, TTFB), mobile readiness, accessibility, E-E-A-T, and UX signals that support visibility.',
  },
]

const capabilities = [
  {
    title: '16 specialized analyzers',
    body: 'Basic info, title & meta, headings, content, keywords, images, links, schema, technical SEO, hreflang, performance, accessibility, mobile, technology, E-E-A-T, and UX.',
  },
  {
    title: 'Scored insights & fixes',
    body: 'Overall 0–100 score with content, technical, performance, and accessibility breakdowns. “Why this page ranks,” positives, and high/medium/low severity fixes with copy-ready HTML snippets.',
  },
  {
    title: 'History, compare & export',
    body: 'Save audits, see re-audit diffs, compare against past runs, overlay issues on the live page, and export Markdown, JSON, or a branded PDF report.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Open the page you want to improve',
    body: 'Launch keywordwalks from the toolbar, side panel, context menu, or Alt+Shift+S while browsing any https page.',
  },
  {
    step: '02',
    title: 'Get a full local SEO audit',
    body: 'Sixteen analyzers run on the rendered DOM — including SPA hydration waits and Shadow DOM — so results match what users and crawlers see.',
  },
  {
    step: '03',
    title: 'Optimize, track, and climb',
    body: 'Work the Fixes checklist, highlight issues on-page, re-audit to measure progress, and export reports for clients or your editorial team.',
  },
]

const trustItems = [
  'Keyword research',
  'On-page SEO',
  'Indexability',
  '16 analyzers',
  'Lab CWV',
  'History & compare',
  'PDF export',
  'Private by design',
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-glow" aria-hidden="true" />
      <div class="hero-orb hero-orb-a" aria-hidden="true" />
      <div class="hero-orb hero-orb-b" aria-hidden="true" />
      <div class="container hero-grid">
        <div class="hero-copy">
          <Reveal as="p" class="eyebrow" :delay="0">For bloggers · creators · SEO pros</Reveal>
          <Reveal as="h1" class="display hero-title" variant="blur" :delay="80">
            keyword<br />walks
          </Reveal>
          <Reveal as="p" class="lede" :delay="180">
            Improve search visibility with on-page SEO analysis in Chrome. Research keywords, fix
            indexing issues, and optimize content, metadata, structure, and performance — without
            sending your pages to a server.
          </Reveal>
          <Reveal class="cta-row" :delay="280">
            <NuxtLink to="#get-started" class="btn btn-primary">Get the extension</NuxtLink>
            <NuxtLink to="/features" class="btn btn-ghost">See all features</NuxtLink>
          </Reveal>
        </div>

        <Reveal class="hero-visual" variant="right" :delay="200">
          <div class="hero-panel">
            <img
              class="hero-shot"
              src="/hero.png"
              alt="keywordwalks extension panel showing Overview score, category bars, and positives checklist"
              width="699"
              height="652"
              loading="eager"
              decoding="async"
            >
          </div>
        </Reveal>
      </div>
    </section>

    <section class="trust">
      <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
          <p v-for="(item, i) in [...trustItems, ...trustItems]" :key="`${item}-${i}`" class="marquee-item">
            {{ item }}
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Who it’s for</p>
          <h2>Built for people who publish and rank</h2>
          <p>
            keywordwalks helps bloggers, content creators, and SEO professionals improve website
            search performance with clear, actionable insights on every open tab.
          </p>
        </Reveal>

        <div class="pillar-grid">
          <Reveal
            v-for="(item, index) in audiences"
            :key="item.title"
            as="article"
            class="pillar"
            :delay="index * 100"
          >
            <span class="pillar-index">0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section outcomes-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">What you can do</p>
          <h2>From keyword research to higher rankings</h2>
          <p>
            Use keywordwalks to research keywords, analyze on-page factors, find technical issues
            that hurt indexing, and optimize the metrics that support visibility in search results.
          </p>
        </Reveal>

        <div class="outcome-grid">
          <Reveal
            v-for="(item, index) in outcomes"
            :key="item.title"
            as="article"
            class="outcome"
            :delay="index * 80"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Inside the extension</p>
          <h2>Everything you need to improve a page</h2>
          <p>
            Content quality, metadata, page structure, performance, accessibility, and more —
            scored in one local pass, then turned into fixes you can act on.
          </p>
        </Reveal>

        <div class="pillar-grid">
          <Reveal
            v-for="(item, index) in capabilities"
            :key="item.title"
            as="article"
            class="pillar"
            :delay="index * 100"
          >
            <span class="pillar-index">0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </Reveal>
        </div>

        <Reveal class="features-cta" :delay="200">
          <NuxtLink to="/features" class="btn btn-ghost">Browse the full feature list</NuxtLink>
        </Reveal>
      </div>
    </section>

    <section class="section workflow-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Workflow</p>
          <h2>Open a page. Audit. Improve. Rank higher.</h2>
          <p>Designed for editorial and SEO workflows — analyze, fix, and re-check without leaving Chrome.</p>
        </Reveal>

        <ol class="workflow">
          <Reveal
            v-for="(item, index) in workflow"
            :key="item.step"
            as="li"
            variant="left"
            :delay="index * 120"
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

    <section class="section highlight-section">
      <div class="container highlight">
        <Reveal variant="left">
          <p class="eyebrow">Privacy first</p>
          <h2>Your drafts and client sites stay private</h2>
          <p class="muted">
            Analysis runs in the content script. Settings, history, and checklists live in Chrome
            storage on your device. There is no login, no cloud sync, and no remote ranking API.
          </p>
        </Reveal>
        <Reveal as="ul" variant="right" :delay="120">
          <li>No accounts or authentication</li>
          <li>No server-side page scraping</li>
          <li>History and checklists stay on this device only</li>
          <li>MIT-licensed extension codebase</li>
        </Reveal>
      </div>
    </section>

    <section id="get-started" class="section cta-section">
      <div class="container">
        <Reveal class="cta-panel" variant="scale">
          <p class="eyebrow">Get started</p>
          <h2>Install keywordwalks and audit your first page</h2>
          <p class="muted">
            keywordwalks is on the Chrome Web Store. Install it in Chrome, pin it to your toolbar,
            then open any https page to research keywords, check indexability, and improve on-page SEO —
            all locally in your browser.
          </p>
          <ol class="steps-list">
            <li>Open keywordwalks on the <strong>Chrome Web Store</strong></li>
            <li>Click <strong>Add to Chrome</strong> to install the extension</li>
            <li>Pin keywordwalks to your toolbar for quick access</li>
            <li>Open any page and run an SEO audit — or press Alt+Shift+S</li>
          </ol>
          <div class="cta-row">
            <a
              class="btn btn-primary"
              href="https://chromewebstore.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install from Chrome Web Store
            </a>
            <NuxtLink to="/features" class="btn btn-ghost">Explore every feature</NuxtLink>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-h));
  display: flex;
  align-items: center;
  padding: 3.5rem 0 4rem;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  inset: 10% -10% auto;
  height: 55%;
  background:
    radial-gradient(circle at 30% 40%, rgba(0, 232, 240, 0.18), transparent 42%),
    radial-gradient(circle at 70% 30%, rgba(124, 255, 107, 0.1), transparent 40%);
  filter: blur(8px);
  pointer-events: none;
  animation: pulse-line 7s ease-in-out infinite;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  pointer-events: none;
  animation: float-orb 9s ease-in-out infinite;
}

.hero-orb-a {
  width: 18rem;
  height: 18rem;
  top: 12%;
  right: 8%;
  background: rgba(0, 232, 240, 0.12);
}

.hero-orb-b {
  width: 14rem;
  height: 14rem;
  bottom: 8%;
  left: 4%;
  background: rgba(124, 255, 107, 0.08);
  animation-delay: -3s;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(3rem, 7vw, 5.1rem);
  margin: 1rem 0 1.25rem;
  background: linear-gradient(120deg, #f5feff 10%, #00e8f0 45%, #7cff6b 85%, #f5feff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer-text 8s linear infinite;
}

.lede {
  max-width: 32rem;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-panel {
  border: 1px solid var(--border-strong);
  border-radius: 18px;
  background: #050505;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.55),
    0 0 40px rgba(0, 232, 240, 0.06),
    inset 0 1px 0 rgba(0, 232, 240, 0.08);
  overflow: hidden;
  animation: drift 6s ease-in-out infinite;
  transition: box-shadow 0.4s var(--ease-out), border-color 0.4s ease;
}

.hero-panel:hover {
  border-color: rgba(0, 232, 240, 0.35);
  box-shadow:
    0 36px 90px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(0, 232, 240, 0.12),
    inset 0 1px 0 rgba(0, 232, 240, 0.12);
}

.hero-shot {
  width: 100%;
  height: auto;
  display: block;
}

.trust {
  padding: 1.1rem 0;
  border-block: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
  overflow: hidden;
}

.marquee {
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 3rem;
  animation: marquee 28s linear infinite;
}

.marquee-item {
  color: var(--text-dim);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.marquee-item::after {
  content: '·';
  margin-left: 3rem;
  color: var(--accent);
  opacity: 0.5;
}

.pillar-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pillar {
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-strong);
  transition: border-color 0.35s ease, transform 0.35s var(--ease-spring);
}

.pillar:hover {
  border-top-color: var(--accent);
  transform: translateY(-4px);
}

.pillar-index {
  display: block;
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.pillar h3 {
  font-size: 1.2rem;
  margin-bottom: 0.65rem;
}

.pillar p {
  color: var(--text-muted);
  font-size: 0.98rem;
}

.outcomes-section {
  background: linear-gradient(180deg, transparent, rgba(0, 232, 240, 0.03), transparent);
}

.outcome-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2rem;
}

.outcome {
  padding: 1.35rem 0;
  border-top: 1px solid var(--border);
  transition: border-color 0.35s ease, transform 0.35s var(--ease-spring);
}

.outcome:hover {
  border-top-color: var(--accent);
  transform: translateY(-3px);
}

.outcome h3 {
  font-size: 1.1rem;
  margin-bottom: 0.55rem;
}

.outcome p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.features-cta {
  margin-top: 2rem;
}

.workflow-section {
  background: linear-gradient(180deg, transparent, rgba(0, 232, 240, 0.04), transparent);
}

.workflow {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
}

.workflow :deep(li) {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  transition: background 0.3s ease, padding-left 0.35s var(--ease-out);
}

.workflow :deep(li:last-child) {
  border-bottom: 1px solid var(--border);
}

.workflow :deep(li:hover) {
  padding-left: 0.5rem;
  background: linear-gradient(90deg, rgba(0, 232, 240, 0.05), transparent);
}

.step {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
}

.workflow h3 {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.workflow p {
  color: var(--text-muted);
  max-width: 40rem;
}

.highlight {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: start;
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.highlight h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.5rem);
  margin: 0.65rem 0 0.85rem;
}

.highlight :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.85rem;
}

.highlight :deep(li) {
  padding-left: 1.25rem;
  position: relative;
  color: var(--text-muted);
  transition: color 0.25s ease, transform 0.25s var(--ease-spring);
}

.highlight :deep(li:hover) {
  color: var(--text);
  transform: translateX(4px);
}

.highlight :deep(li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px rgba(0, 232, 240, 0.5);
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

.steps-list {
  margin: 0 0 1.75rem;
  padding-left: 1.2rem;
  color: var(--text-muted);
  display: grid;
  gap: 0.45rem;
}

.steps-list code,
.steps-list strong {
  font-size: 0.88em;
  font-weight: 600;
  color: var(--accent);
  background: var(--accent-dim);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}

@media (max-width: 960px) {
  .hero-grid,
  .pillar-grid,
  .outcome-grid,
  .highlight {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-top: 2.5rem;
  }

  .hero-visual {
    order: -1;
  }

  .cta-panel {
    padding: 2rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-glow,
  .hero-orb,
  .hero-panel,
  .hero-title,
  .marquee-track {
    animation: none !important;
  }
}
</style>
