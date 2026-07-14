<script setup lang="ts">
const storeUrl = 'https://chromewebstore.google.com/'

useSeoMeta({
  title: 'About KeywordWalks — We show the path, not the noise',
  description:
    'KeywordWalks helps bloggers, creators, and SEO pros walk any page, see what matters, and know what to do next — privately in Chrome.',
})

const values = [
  {
    title: 'Bloggers',
    body: 'Publish with a clear briefing: titles, keywords, structure, and gaps — so posts earn readers instead of sitting in drafts.',
  },
  {
    title: 'Content creators',
    body: 'Reverse a competitor page into direction for your next piece: depth, hooks, and structure before you write.',
  },
  {
    title: 'SEO professionals',
    body: 'Audit, compare, export, and explain. Prioritized fixes and history for clients — without drowning them in charts.',
  },
]

const beliefs = [
  {
    step: '01',
    title: 'Clarity over volume',
    body: 'Most SEO tools overwhelm. KeywordWalks tells you what matters on the open page, why it matters, and what to do next.',
  },
  {
    step: '02',
    title: 'Walk where the page lives',
    body: 'Their blog, your draft, a client URL — reverse the ranking trail in Chrome, on the live DOM, with no cloud scrape.',
  },
  {
    step: '03',
    title: 'Outcomes, not jargon',
    body: 'Faster drafts. Competitive paths. More clicks. Pages that can actually climb. That’s the finish line — SERPs are just the map.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="hero-glow" aria-hidden="true" />
      <svg class="hero-trail" viewBox="0 0 1200 200" fill="none" aria-hidden="true">
        <path
          class="trail-line"
          d="M20 140 C160 100, 260 60, 400 90 S620 170, 780 110 S1000 40, 1180 70"
          stroke="url(#aboutTrail)"
          stroke-width="1.5"
          stroke-dasharray="6 10"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient id="aboutTrail" x1="0" y1="0" x2="1200" y2="0">
            <stop stop-color="#00e8f0" stop-opacity="0" />
            <stop offset="0.4" stop-color="#00e8f0" stop-opacity="0.5" />
            <stop offset="0.75" stop-color="#7cff6b" stop-opacity="0.4" />
            <stop offset="1" stop-color="#7cff6b" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div class="container hero-inner">
        <Reveal as="p" class="eyebrow">About KeywordWalks</Reveal>
        <Reveal as="h1" class="display" variant="blur" :delay="80">
          We show the path,<br />not the noise.
        </Reveal>
        <Reveal as="p" class="lede" :delay="160">
          KeywordWalks is a Chrome extension for bloggers, content creators, and SEO professionals.
          Walk any page. See why it ranks. Know what to write or fix next — privately, on your machine.
        </Reveal>
      </div>
    </section>

    <section class="section">
      <div class="container story">
        <Reveal class="story-copy" variant="left">
          <p class="eyebrow">Our philosophy</p>
          <h2>Most SEO tools overwhelm you with data.</h2>
          <p class="muted">
            KeywordWalks tells you exactly what matters, why it matters, and what to do next. That
            isn’t a feature list — it’s the product identity.
          </p>
          <p class="muted">
            Open a competitor. Open a draft. Open a client site. Walk the ranking trail in place:
            keywords they underplayed, structure that earns clicks, blockers that stop indexing —
            then ship the change.
          </p>
        </Reveal>
        <Reveal class="story-panel" variant="right" :delay="120" aria-hidden="true">
          <img src="/favicon.png" alt="" width="120" height="120" class="mark" />
          <p class="panel-label">WALK · FIND · FIX</p>
          <p class="panel-line">Readers · Revenue · Faster drafts</p>
        </Reveal>
      </div>
    </section>

    <section class="section values-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Who we serve</p>
          <h2>One trail. Three audiences.</h2>
          <p>Same private audit — outcomes tuned to how you actually ship work.</p>
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
          <p class="eyebrow">How we think</p>
          <h2>Walk their page. Write yours.</h2>
          <p>
            Ranking isn’t a single score — it’s a path. KeywordWalks walks that path with you on
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
          <h2>Ready to walk your first page?</h2>
          <p class="muted">
            Explore the full toolkit — or install from the Chrome Web Store and reverse a page today.
          </p>
          <div class="cta-row">
            <a
              class="btn btn-primary"
              :href="storeUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install free
            </a>
            <NuxtLink to="/features" class="btn btn-ghost">Explore features</NuxtLink>
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

.hero-trail {
  position: absolute;
  inset: auto 0 0 0;
  width: 100%;
  height: 40%;
  pointer-events: none;
  opacity: 0.55;
}

.trail-line {
  animation: trail-dash 18s linear infinite;
}

@keyframes trail-dash {
  to {
    stroke-dashoffset: -320;
  }
}

.hero-inner {
  position: relative;
  z-index: 1;
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
  .hero-glow,
  .trail-line {
    animation: none !important;
  }
}
</style>
