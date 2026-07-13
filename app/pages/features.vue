<script setup lang="ts">
useSeoMeta({
  title: 'Features — keywordwalks SEO Chrome extension',
  description:
    'Full feature list for keywordwalks: 16 SEO analyzers, keyword research, scoring, indexability, history, compare, overlays, exports, and settings for bloggers, creators, and SEO pros.',
})

const analyzers = [
  {
    name: 'Basic Information',
    detail:
      'HTTPS, canonical URL, language, charset, viewport, and robots meta — the foundation of crawlability and indexing.',
  },
  {
    name: 'Title & Meta',
    detail:
      'Title and meta description length benchmarks, Open Graph and Twitter/X cards, plus SERP and social previews so you see how the page may appear in results and shares.',
  },
  {
    name: 'Heading Analysis',
    detail:
      'H1 presence and duplicates, heading lists and counts, and hierarchy skips that confuse structure for readers and crawlers.',
  },
  {
    name: 'Content Analysis',
    detail:
      'Word count vs page-type benchmarks, thin content flags, Flesch readability, reading time, and media mix (paragraphs, lists, images, video, and more).',
  },
  {
    name: 'Keyword Analysis',
    detail:
      'Top terms, bigrams, and trigrams; stuffing checks; primary and secondary keyword placement across title, meta, URL, H1/H2, first 100 words, and image alts.',
  },
  {
    name: 'Images',
    detail:
      'Missing or empty alt text, broken images, lazy-load, responsive srcset, modern formats (WebP/AVIF), and largest-image signals.',
  },
  {
    name: 'Links',
    detail:
      'Internal/external/nofollow counts, empty or weak anchors, optional broken-link checks, and an internal link map with depth and filter views.',
  },
  {
    name: 'Structured Data',
    detail:
      'JSON-LD and microdata detection for Article, FAQ, Product, BreadcrumbList, Organization, HowTo, LocalBusiness, and related types that support rich results.',
  },
  {
    name: 'Technical SEO',
    detail:
      'noindex risks, duplicate title/meta, canonical and robots consistency, plus same-origin robots.txt and sitemap peeks for indexing clues.',
  },
  {
    name: 'Hreflang',
    detail:
      'Alternate language annotations, x-default, invalid or duplicate codes, and self-reference checks for multilingual sites.',
  },
  {
    name: 'Performance',
    detail:
      'Script/stylesheet counts, HTML size, DOM nodes, resource timing, and lab Core Web Vitals (LCP, CLS, INP, TTFB) for the current page load.',
  },
  {
    name: 'Accessibility',
    detail:
      'Images without alt, empty links, heading order issues, and presence of ARIA/roles/labels that affect usability and SEO-adjacent quality.',
  },
  {
    name: 'Mobile',
    detail:
      'Viewport configuration, responsive images and media queries, small font sampling, and small touch-target detection.',
  },
  {
    name: 'Technology Detection',
    detail:
      'CMS and stack clues — WordPress, Shopify, Next.js, Nuxt, React, Vue, analytics tags (GA, GTM), and more — to contextualize the audit.',
  },
  {
    name: 'E-E-A-T Signals',
    detail:
      'Author, publish/updated dates, bio heuristics, and links to About, Contact, Privacy, and Terms that support trust signals.',
  },
  {
    name: 'UX Signals',
    detail:
      'Table of contents, breadcrumbs, sticky nav, comments, related posts, search, and ad density estimates that affect engagement.',
  },
]

const reportTabs = [
  {
    title: 'Overview',
    body: 'Score card, “Why this page ranks,” what’s working well, score-history sparkline, and since-last-audit diffs (fixed / new / still open).',
  },
  {
    title: 'Content & keywords',
    body: 'Content Analysis, Heading Analysis, and Keyword Analysis — including the placement matrix for your target and secondary keywords.',
  },
  {
    title: 'Indexability',
    body: 'Basic Information, Title & Meta, Technical SEO, and Hreflang in one place — plus SERP and social previews.',
  },
  {
    title: 'Assets & structure',
    body: 'Structured data, Images, and Outgoing links with an internal link map to strengthen topical and crawl paths.',
  },
  {
    title: 'Performance & signals',
    body: 'Performance + Mobile, Accessibility, and Signals (E-E-A-T, UX, Technology) for a full ranking-signal picture.',
  },
  {
    title: 'Fixes',
    body: 'All prioritized recommendations with severity, suggested fixes, copy-ready HTML snippets, show-on-page highlight, and a per-URL checklist.',
  },
]

const featureGroups = [
  {
    title: 'Scoring & insights',
    items: [
      'Overall score 0–100 plus Content, Technical, Performance, and Accessibility sub-scores',
      'Page-type detection: blog/article, product, homepage, utility, or general — with weighted scoring',
      '“Why This Page Ranks” strength reasons and “What’s Working Well” positives',
      'Prioritized recommendations with high / medium / low severity, problem, why it matters, and suggested fix',
      'Optional custom target keyword and up to three secondary keywords for placement checks',
      'Per-section scores and analysis duration on the score card',
    ],
  },
  {
    title: 'Workflow & UI',
    items: [
      'Dark SaaS UI in a popup (~640×650) or full-height Chrome side panel',
      'Tabbed report with issue badge counts and a “Filter tabs…” search',
      'History library of the last 20 full audits with open, compare, delete, and clear-all',
      'Compare mode: score deltas, category metrics, and issue sets (only A / shared / only B)',
      'Re-audit diffs on Overview after you ship fixes',
      'On-page overlay badges and highlight-on-page for issues with selectors',
      'Launch from toolbar, context menu (“Analyze with keywordwalks”), or Alt+Shift+S',
      'Auto-analyze on open (toggle in sidebar) and Refresh to re-run anytime',
    ],
  },
  {
    title: 'Export & persistence',
    items: [
      'Copy report as Markdown or JSON; download a JSON file',
      'Branded PDF print report with executive summary, score breakdown, and top fixes',
      'Report cache in Chrome storage (~1 hour) for fast reopen',
      'Score history sparklines (up to 100 points per URL)',
      'Fix checklist state persisted per URL (open / done / dismissed)',
      'All settings saved in chrome.storage.local — no cloud account required',
    ],
  },
  {
    title: 'Enrichment under the hood',
    items: [
      'Single-pass DOM parse into a shared PageContext for consistent analyzer input',
      'Shadow DOM traversal and configurable SPA hydration wait',
      'Resource timing via the Performance API',
      'Lab Core Web Vitals for the current page load (not Search Console CrUX)',
      'Broken image checks and optional broken link checks (capped and timed)',
      'Same-origin robots.txt + sitemap peek within the analysis budget',
    ],
  },
]

const settings = [
  { name: 'Broken links', detail: 'Turn optional broken-link checks on or off' },
  { name: 'SPA hydration wait', detail: 'Wait 500–8000ms for client-rendered content before analysis' },
  { name: 'Analysis budget', detail: 'Cap enrichment work at 2000–15000ms for speed vs depth' },
  { name: 'Target keyword', detail: 'Override auto-detected primary keyword for placement research' },
  { name: 'Secondary keywords', detail: 'Comma-separated terms (up to 3 shown in the placement matrix)' },
  { name: 'Open as side panel', detail: 'Prefer Chrome side panel over the compact popup' },
  { name: 'Auto-analyze on open', detail: 'Run analysis automatically when the UI opens' },
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <Reveal as="p" class="eyebrow">Product capabilities</Reveal>
        <Reveal as="h1" class="display" variant="blur" :delay="80">Features</Reveal>
        <Reveal as="p" class="lede" :delay="160">
          keywordwalks gives bloggers, content creators, and SEO professionals a complete on-page
          toolkit: keyword research, indexability checks, content and metadata audits, performance
          signals, prioritized fixes, history, compare, and export — all on the page you’re viewing.
        </Reveal>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Analysis engine</p>
          <h2>Sixteen specialized SEO analyzers</h2>
          <p>
            Each analyzer contributes issues, positives, and signals that feed your score and
            recommendations — so you can improve content quality, metadata, structure, indexing, and more.
          </p>
        </Reveal>

        <div class="analyzer-grid">
          <Reveal
            v-for="(item, index) in analyzers"
            :key="item.name"
            as="article"
            class="analyzer"
            :delay="(index % 4) * 70"
          >
            <h3>{{ item.name }}</h3>
            <p>{{ item.detail }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section tabs-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Report workspace</p>
          <h2>Tabs built for SEO workflows</h2>
          <p>
            Move from overview insights to deep sections, then close the loop in Fixes — the same
            flow editors and SEO consultants use when improving rankings.
          </p>
        </Reveal>
        <div class="tab-grid">
          <Reveal
            v-for="(item, index) in reportTabs"
            :key="item.title"
            as="article"
            class="tab-card"
            :delay="index * 70"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
          </Reveal>
        </div>
      </div>
    </section>

    <section
      v-for="(group, gIndex) in featureGroups"
      :key="group.title"
      class="section group-section"
    >
      <div class="container group">
        <Reveal class="group-title" variant="left" :delay="gIndex * 40">
          <h2>{{ group.title }}</h2>
        </Reveal>
        <Reveal as="ul" variant="right" :delay="80 + gIndex * 40">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </Reveal>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Configuration</p>
          <h2>Settings that shape each run</h2>
          <p>
            Tune depth vs. speed, set keywords for research, and choose how the extension opens —
            then save and re-analyze to measure ranking-ready improvements.
          </p>
        </Reveal>
        <ul class="settings-list">
          <Reveal
            v-for="(item, index) in settings"
            :key="item.name"
            as="li"
            :delay="index * 60"
          >
            <strong>{{ item.name }}</strong>
            <span>{{ item.detail }}</span>
          </Reveal>
        </ul>
      </div>
    </section>

    <section class="section limits">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Built to win</p>
          <h2>Turn every page into a ranking opportunity</h2>
          <p>
            keywordwalks gives bloggers, creators, and SEO pros a clear path from audit to action —
            so you fix what matters, ship faster, and improve visibility with confidence.
          </p>
        </Reveal>
        <Reveal as="ul" class="limits-list" :delay="80">
          <li>See keyword gaps, metadata issues, and structure problems in one local pass</li>
          <li>Prioritized fixes you can apply immediately — not vague advice</li>
          <li>Catch indexability blockers before they cost you crawl budget</li>
          <li>Re-audit after edits to prove what improved and what still needs work</li>
          <li>Keep drafts and client sites private while you optimize for search</li>
        </Reveal>
        <Reveal class="cta-row" :delay="160">
          <NuxtLink to="/#get-started" class="btn btn-primary">Get started</NuxtLink>
          <NuxtLink to="/about" class="btn btn-ghost">About keywordwalks</NuxtLink>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 5.5rem 0 2rem;
  border-bottom: 1px solid var(--border);
  background:
    radial-gradient(ellipse 60% 80% at 0% 0%, rgba(0, 232, 240, 0.12), transparent 55%),
    radial-gradient(ellipse 40% 50% at 100% 0%, rgba(124, 255, 107, 0.06), transparent 50%);
}

.page-hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  margin: 0.85rem 0 1rem;
}

.lede {
  max-width: 42rem;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.analyzer-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: 1px solid var(--border);
}

.analyzer {
  padding: 1.35rem 1.25rem 1.35rem 0;
  border-bottom: 1px solid var(--border);
  transition:
    background 0.35s ease,
    transform 0.35s var(--ease-spring),
    border-color 0.35s ease;
}

.analyzer:hover {
  background: linear-gradient(90deg, rgba(0, 232, 240, 0.04), transparent);
  transform: translateX(4px);
}

.analyzer:nth-child(odd) {
  padding-right: 1.75rem;
  border-right: 1px solid var(--border);
}

.analyzer:nth-child(even) {
  padding-left: 1.75rem;
}

.analyzer h3 {
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  color: var(--accent);
}

.analyzer p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.tabs-section {
  background: linear-gradient(180deg, transparent, rgba(0, 232, 240, 0.03), transparent);
}

.tab-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2rem;
}

.tab-card {
  padding: 1.25rem 0;
  border-top: 1px solid var(--border-strong);
  transition: border-color 0.35s ease, transform 0.35s var(--ease-spring);
}

.tab-card:hover {
  border-top-color: var(--accent);
  transform: translateY(-3px);
}

.tab-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.tab-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.group-section {
  padding: 2.5rem 0;
}

.group {
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
}

.group-title h2 {
  font-size: 1.45rem;
}

.group :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.group :deep(li) {
  position: relative;
  padding-left: 1.1rem;
  color: var(--text-muted);
  transition: color 0.25s ease, transform 0.25s var(--ease-spring);
}

.group :deep(li:hover) {
  color: var(--text);
  transform: translateX(3px);
}

.group :deep(li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 1px;
  background: var(--accent);
}

.settings-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.settings-list :deep(li) {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.9rem 0;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  transition: color 0.25s ease, border-color 0.25s ease, padding-left 0.3s var(--ease-out);
}

.settings-list :deep(li strong) {
  color: var(--text);
  font-weight: 600;
  font-size: 0.95rem;
}

.settings-list :deep(li:hover) {
  border-top-color: rgba(0, 232, 240, 0.35);
  padding-left: 0.35rem;
}

.limits {
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.015);
}

.limits-list {
  margin: 0 0 2rem;
  padding-left: 1.2rem;
  color: var(--text-muted);
  display: grid;
  gap: 0.55rem;
  max-width: 44rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (max-width: 820px) {
  .analyzer-grid,
  .tab-grid,
  .group,
  .settings-list {
    grid-template-columns: 1fr;
  }

  .analyzer:nth-child(odd),
  .analyzer:nth-child(even) {
    padding-left: 0;
    padding-right: 0;
    border-right: none;
  }
}
</style>
