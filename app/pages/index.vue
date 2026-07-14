<script setup lang="ts">
const storeUrl = 'https://chromewebstore.google.com/'

useSeoMeta({
  title: 'KeywordWalks — Find keywords your competitors forgot',
  description:
    'The Chrome SEO extension for bloggers, creators, and SEO pros. Walk any page, see why it ranks, and know what to write next — privately, in your browser.',
})

const heroActive = ref(false)
const scanPlaying = ref(false)
let scanTimer: ReturnType<typeof setTimeout> | null = null

const metricHighlights = [
  { label: 'SEO score', value: '78', top: '18%', left: '12%' },
  { label: 'Content', value: '72', top: '38%', left: '58%' },
  { label: 'Fixes', value: '12', top: '62%', left: '22%' },
]

function playScan() {
  if (scanPlaying.value) return
  scanPlaying.value = true
  if (scanTimer) clearTimeout(scanTimer)
  scanTimer = setTimeout(() => {
    scanPlaying.value = false
  }, 2200)
}

function onHeroEnter() {
  heroActive.value = true
  playScan()
}

function onHeroLeave() {
  heroActive.value = false
}

onBeforeUnmount(() => {
  if (scanTimer) clearTimeout(scanTimer)
})

const philosophy = [
  {
    title: 'Clarity over volume',
    body: 'One page. One path. Prioritized next steps — not forty charts fighting for attention.',
  },
  {
    title: 'Work where the page lives',
    body: 'Their blog, your draft, a client URL. Open it in Chrome and walk the ranking signals in place.',
  },
  {
    title: 'Private by design',
    body: 'Drafts, staging, and client sites stay on your machine. No login. No cloud scrape. No account wall.',
  },
]

const withoutItems = [
  'Guess keywords',
  'Miss SEO issues',
  'Check competitors manually',
  'Juggle five tools',
]

const withItems = [
  'One-click analysis',
  'Prioritized fixes + copy-ready snippets',
  'Competitor comparison',
  'Faster publishing',
]

const audiences = [
  {
    title: 'Bloggers',
    body: 'Ship posts that earn readers — not guesswork. Spot gaps before you publish, then re-walk after edits.',
  },
  {
    title: 'Content creators',
    body: 'Turn competitive pages into a briefing. Know depth, structure, and hooks before you draft the next piece.',
  },
  {
    title: 'SEO professionals',
    body: 'Audit faster, explain clearer, export for clients. History, compare, and prioritized fixes without spreadsheet theater.',
  },
]

const outcomes = [
  {
    title: 'Write faster, with less guesswork',
    body: 'See what the page already covers — and what’s missing — so your next draft starts with direction, not a blank cursor.',
  },
  {
    title: 'Steal the ranking path, not just keywords',
    body: 'Walk a competitor’s page and uncover placement, structure, and signals that explain why they’re ahead.',
  },
  {
    title: 'More clicks from titles that actually work',
    body: 'Title, meta, headings, and previews in one pass — so search snippets earn the click, not just the impression.',
  },
  {
    title: 'Unblock pages that should already rank',
    body: 'Catch indexing and technical blockers before they waste crawl budget — then fix, re-audit, and prove the lift.',
  },
]

const journey = [
  { step: '01', title: 'Open blog', body: 'Land on your draft or a competitor URL.' },
  { step: '02', title: 'Click extension', body: 'Toolbar, side panel, or Alt+Shift+S.' },
  { step: '03', title: 'Scan page', body: 'Sixteen analyzers read the live DOM.' },
  { step: '04', title: 'See SEO score', body: 'Overall + category breakdowns in seconds.' },
  { step: '05', title: 'Compare competitor', body: 'Diff scores, content, and technical gaps.' },
  { step: '06', title: 'Ship improvements', body: 'Prioritized fixes with copy-ready snippets.' },
]

const trustItems = [
  'Walk any page',
  'Competitor paths',
  'Faster drafts',
  'More clicks',
  'Indexing clarity',
  '16 analyzers',
  'Private by design',
  'PDF export',
]

const freeTeasers = [
  {
    title: 'History',
    body: 'Your ranking trail, saved locally — reopen any past audit in one click.',
    image: '/histioryfeature.png',
    alt: 'KeywordWalks Audit history panel',
    to: '/features#history',
  },
  {
    title: 'Compare',
    body: 'See exactly why their page scores higher — deltas in green and red.',
    image: '/comparefeature.png',
    alt: 'KeywordWalks Compare score delta view',
    to: '/features#compare',
  },
  {
    title: 'Settings',
    body: 'Tune keywords, SPA wait, and analysis depth — power controls, free forever.',
    image: '/settingsfeature.png',
    alt: 'KeywordWalks Settings panel',
    to: '/features#settings',
  },
]
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero-glow" aria-hidden="true" />
      <div class="hero-orb hero-orb-a" aria-hidden="true" />
      <div class="hero-orb hero-orb-b" aria-hidden="true" />
      <svg class="hero-trail" viewBox="0 0 1200 400" fill="none" aria-hidden="true">
        <path
          class="trail-line"
          d="M40 320 C180 280, 220 180, 360 200 S540 300, 680 220 S900 80, 1160 120"
          stroke="url(#trailGrad)"
          stroke-width="1.5"
          stroke-dasharray="6 10"
          stroke-linecap="round"
        />
        <circle class="trail-dot" cx="360" cy="200" r="3.5" fill="#00e8f0" />
        <circle class="trail-dot trail-dot-b" cx="680" cy="220" r="3.5" fill="#7cff6b" />
        <circle class="trail-dot trail-dot-c" cx="1160" cy="120" r="4" fill="#00e8f0" />
        <defs>
          <linearGradient id="trailGrad" x1="0" y1="0" x2="1200" y2="0">
            <stop stop-color="#00e8f0" stop-opacity="0" />
            <stop offset="0.35" stop-color="#00e8f0" stop-opacity="0.55" />
            <stop offset="0.7" stop-color="#7cff6b" stop-opacity="0.45" />
            <stop offset="1" stop-color="#7cff6b" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div class="container hero-grid">
        <div class="hero-copy">
          <Reveal as="p" class="eyebrow" :delay="0">KeywordWalks · bloggers · creators · SEO pros</Reveal>
          <Reveal as="h1" class="display hero-title" variant="blur" :delay="80">
            Find keywords your<br />competitors forgot.
          </Reveal>
          <Reveal as="p" class="lede" :delay="180">
            Open any page. Walk the path that earns rankings — then write, fix, and publish knowing
            exactly what matters next. Private. Local. Built for people who need readers, not another
            dashboard.
          </Reveal>
          <Reveal class="cta-row" :delay="280">
            <a
              class="btn btn-primary"
              :href="storeUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install free
            </a>
            <NuxtLink to="#why" class="btn btn-ghost">Why KeywordWalks</NuxtLink>
          </Reveal>
        </div>

        <Reveal class="hero-visual" variant="right" :delay="200">
          <button
            type="button"
            class="hero-demo"
            :class="{ active: heroActive, scanning: scanPlaying }"
            aria-label="Play KeywordWalks demo scan. Hover or click to animate."
            @mouseenter="onHeroEnter"
            @mouseleave="onHeroLeave"
            @focus="onHeroEnter"
            @blur="onHeroLeave"
            @click="playScan"
          >
            <span class="demo-hint">Hover to scan</span>
            <div class="hero-panel">
              <img
                class="hero-shot"
                src="/hero.png"
                alt="KeywordWalks extension panel showing Overview score, category bars, and positives checklist"
                width="699"
                height="652"
                loading="eager"
                decoding="async"
              >
              <span class="scan-beam" aria-hidden="true" />
              <span
                v-for="(m, i) in metricHighlights"
                :key="m.label"
                class="metric-chip"
                :class="{ show: heroActive || scanPlaying }"
                :style="{ top: m.top, left: m.left, animationDelay: `${i * 0.18}s` }"
              >
                <span class="metric-label">{{ m.label }}</span>
                <span class="metric-value">{{ m.value }}</span>
              </span>
            </div>
          </button>
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

    <section id="why" class="section why-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Why KeywordWalks?</p>
          <h2>Most SEO tools overwhelm you. We show the path.</h2>
          <p>
            KeywordWalks doesn’t dump endless data. It tells you what matters on the page you’re
            looking at, why it matters, and what to do next — so you can create faster, compete
            smarter, and get more readers.
          </p>
        </Reveal>

        <div class="pillar-grid">
          <Reveal
            v-for="(item, index) in philosophy"
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

    <section class="section compare-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Before vs after</p>
          <h2>Same goal. Completely different day.</h2>
          <p>Stop juggling tabs. Start walking one page with a clear next step.</p>
        </Reveal>

        <div class="compare-grid">
          <Reveal as="article" class="compare-card without" variant="left">
            <p class="compare-label">Without KeywordWalks</p>
            <ul>
              <li v-for="item in withoutItems" :key="item">
                <span class="mark bad" aria-hidden="true">✕</span>
                {{ item }}
              </li>
            </ul>
          </Reveal>
          <Reveal as="article" class="compare-card with" variant="right" :delay="100">
            <p class="compare-label">With KeywordWalks</p>
            <ul>
              <li v-for="item in withItems" :key="item">
                <span class="mark good" aria-hidden="true">✓</span>
                {{ item }}
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Who it’s for</p>
          <h2>One trail. Three ways to win.</h2>
          <p>
            Whether you publish daily, produce content at scale, or run SEO for clients — you want
            more readers, more clicks, and a clearer next move.
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
          <p class="eyebrow">What you actually want</p>
          <h2>You don’t wake up wanting SERPs. You want outcomes.</h2>
          <p>
            Faster content. Competitive edges. More clicks. Pages that can actually climb. KeywordWalks
            is the trail between the open tab and those results.
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

    <section class="section journey-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">The workflow</p>
          <h2>From open tab to shipped improvements.</h2>
          <p>Not another grid of feature cards — the path you actually take.</p>
        </Reveal>

        <ol class="journey">
          <Reveal
            v-for="(item, index) in journey"
            :key="item.step"
            as="li"
            class="journey-step"
            :delay="index * 70"
          >
            <span class="journey-num">{{ item.step }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
            <span v-if="index < journey.length - 1" class="journey-arrow" aria-hidden="true">↓</span>
          </Reveal>
        </ol>
      </div>
    </section>

    <section class="section free-teaser-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Freely included</p>
          <h2>Premium workflow. Zero paywall.</h2>
          <p>
            History, Compare, and Settings — the tools other products gate — ship free with
            KeywordWalks. No account. No upgrade.
          </p>
        </Reveal>

        <div class="teaser-grid">
          <Reveal
            v-for="(item, index) in freeTeasers"
            :key="item.title"
            as="article"
            class="teaser"
            :delay="index * 90"
          >
            <NuxtLink :to="item.to" class="teaser-link">
              <div class="teaser-shot">
                <img
                  :src="item.image"
                  :alt="item.alt"
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <span class="teaser-badge">Free forever</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.body }}</p>
            </NuxtLink>
          </Reveal>
        </div>

        <Reveal class="features-cta" :delay="220">
          <NuxtLink to="/features#workflow-tools" class="btn btn-ghost">
            See History, Compare &amp; Settings
          </NuxtLink>
        </Reveal>
      </div>
    </section>

    <section class="section highlight-section">
      <div class="container highlight">
        <Reveal as="p" class="eyebrow highlight-eyebrow">Privacy first</Reveal>
        <div class="highlight-body">
          <Reveal variant="left">
            <h2>Your drafts and client sites stay on the trail — not in the cloud</h2>
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
      </div>
    </section>

    <section id="get-started" class="section cta-section">
      <div class="container">
        <Reveal class="cta-panel" variant="scale">
          <p class="eyebrow">Get started</p>
          <h2>Install KeywordWalks. Walk your first page.</h2>
          <p class="muted">
            On the Chrome Web Store. Pin it, open any https page, and see the path — keywords,
            structure, blockers, and fixes — without sending the page anywhere.
          </p>
          <ol class="steps-list">
            <li>Open KeywordWalks on the <strong>Chrome Web Store</strong></li>
            <li>Click <strong>Add to Chrome</strong> to install</li>
            <li>Pin KeywordWalks to your toolbar</li>
            <li>Open any page and walk the trail — or press Alt+Shift+S</li>
          </ol>
          <div class="cta-row">
            <a
              class="btn btn-primary"
              :href="storeUrl"
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

.hero-trail {
  position: absolute;
  inset: auto 0 8% 0;
  width: 100%;
  height: 28%;
  pointer-events: none;
  opacity: 0.7;
  z-index: 0;
}

.trail-line {
  animation: trail-dash 18s linear infinite;
}

.trail-dot {
  animation: trail-pulse 3.2s ease-in-out infinite;
}

.trail-dot-b {
  animation-delay: 0.8s;
}

.trail-dot-c {
  animation-delay: 1.6s;
}

@keyframes trail-dash {
  to {
    stroke-dashoffset: -320;
  }
}

@keyframes trail-pulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.35);
  }
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 3rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.35rem, 5.4vw, 3.85rem);
  margin: 1rem 0 1.25rem;
  background: linear-gradient(120deg, #f5feff 10%, #00e8f0 45%, #7cff6b 85%, #f5feff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer-text 8s linear infinite;
  max-width: 16ch;
}

.lede {
  max-width: 34rem;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-demo {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  position: relative;
  font: inherit;
  color: inherit;
}

.demo-hint {
  position: absolute;
  top: -0.35rem;
  right: 0.5rem;
  z-index: 3;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.75;
  transition: opacity 0.3s ease;
}

.hero-demo.active .demo-hint,
.hero-demo.scanning .demo-hint {
  opacity: 0;
}

.hero-panel {
  position: relative;
  border: 1px solid var(--border-strong);
  border-radius: 18px;
  background: #050505;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.55),
    0 0 40px rgba(0, 232, 240, 0.06),
    inset 0 1px 0 rgba(0, 232, 240, 0.08);
  overflow: hidden;
  transform-origin: center center;
  transition:
    transform 0.45s var(--ease-spring),
    box-shadow 0.4s var(--ease-out),
    border-color 0.4s ease;
}

.hero-demo.active .hero-panel,
.hero-demo.scanning .hero-panel {
  transform: scale(1.04);
  border-color: rgba(0, 232, 240, 0.4);
  box-shadow:
    0 36px 90px rgba(0, 0, 0, 0.6),
    0 0 70px rgba(0, 232, 240, 0.16),
    inset 0 1px 0 rgba(0, 232, 240, 0.14);
}

.hero-shot {
  width: 100%;
  height: auto;
  display: block;
  transition: filter 0.4s ease;
}

.hero-demo.active .hero-shot,
.hero-demo.scanning .hero-shot {
  filter: brightness(1.05) saturate(1.08);
}

.scan-beam {
  position: absolute;
  left: 0;
  right: 0;
  height: 28%;
  top: -30%;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(0, 232, 240, 0.08),
    rgba(124, 255, 107, 0.18),
    rgba(0, 232, 240, 0.08),
    transparent
  );
  opacity: 0;
  pointer-events: none;
  z-index: 2;
}

.hero-demo.scanning .scan-beam {
  opacity: 1;
  animation: scan-sweep 2.1s var(--ease-out) forwards;
}

@keyframes scan-sweep {
  from {
    top: -30%;
  }
  to {
    top: 105%;
  }
}

.metric-chip {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.45rem 0.65rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 232, 240, 0.35);
  background: rgba(0, 8, 10, 0.88);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 20px rgba(0, 232, 240, 0.15);
  opacity: 0;
  transform: translateY(8px) scale(0.92);
  pointer-events: none;
  transition:
    opacity 0.35s var(--ease-out),
    transform 0.35s var(--ease-spring);
}

.metric-chip.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  animation: chip-pulse 1.8s ease-in-out infinite;
}

.metric-label {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.metric-value {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1.1;
}

@keyframes chip-pulse {
  0%,
  100% {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 16px rgba(0, 232, 240, 0.12);
  }
  50% {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 0 28px rgba(0, 232, 240, 0.28);
  }
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

.why-section {
  background:
    radial-gradient(ellipse 50% 60% at 100% 0%, rgba(0, 232, 240, 0.06), transparent 55%),
    linear-gradient(180deg, transparent, rgba(124, 255, 107, 0.03), transparent);
}

.compare-section {
  background: linear-gradient(180deg, transparent, rgba(0, 232, 240, 0.035), transparent);
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.compare-card {
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.35);
}

.compare-card.with {
  border-color: rgba(0, 232, 240, 0.28);
  background:
    radial-gradient(ellipse 80% 60% at 0% 0%, rgba(0, 232, 240, 0.1), transparent 55%),
    rgba(0, 12, 14, 0.55);
}

.compare-label {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 1.15rem;
}

.compare-card.without .compare-label {
  color: var(--text-muted);
}

.compare-card.with .compare-label {
  color: var(--accent);
}

.compare-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
}

.compare-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 1rem;
}

.mark {
  flex-shrink: 0;
  width: 1.35rem;
  height: 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.1rem;
}

.mark.bad {
  color: #f07178;
  background: rgba(240, 113, 120, 0.12);
}

.mark.good {
  color: var(--accent-lime);
  background: rgba(124, 255, 107, 0.12);
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

.journey-section {
  background:
    radial-gradient(ellipse 40% 50% at 50% 0%, rgba(0, 232, 240, 0.05), transparent 60%),
    linear-gradient(180deg, transparent, rgba(124, 255, 107, 0.025), transparent);
}

.journey {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}

.journey-step {
  position: relative;
  padding: 1.25rem 0.85rem 1.5rem;
  border-top: 1px solid var(--border-strong);
  transition: border-color 0.3s ease, transform 0.3s var(--ease-spring);
}

.journey-step:hover {
  border-top-color: var(--accent);
  transform: translateY(-3px);
}

.journey-num {
  display: block;
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 0.65rem;
}

.journey-step h3 {
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
}

.journey-step p {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.journey-arrow {
  display: none;
}

.features-cta {
  margin-top: 2rem;
}

.free-teaser-section {
  background:
    radial-gradient(ellipse 45% 50% at 100% 0%, rgba(0, 232, 240, 0.05), transparent 55%),
    linear-gradient(180deg, transparent, rgba(124, 255, 107, 0.03), transparent);
}

.teaser-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.teaser-link {
  display: block;
  height: 100%;
  transition: transform 0.35s var(--ease-spring);
}

.teaser-link:hover {
  transform: translateY(-4px);
}

.teaser-shot {
  border: 1px solid var(--border-strong);
  border-radius: 14px;
  overflow: hidden;
  background: #050505;
  margin-bottom: 1rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
}

.teaser-link:hover .teaser-shot {
  border-color: rgba(0, 232, 240, 0.35);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.4), 0 0 32px rgba(0, 232, 240, 0.08);
}

.teaser-shot img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: top left;
}

.teaser-badge {
  display: inline-flex;
  margin-bottom: 0.55rem;
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #001214;
  background: linear-gradient(135deg, var(--accent), var(--accent-lime));
}

.teaser h3 {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.teaser p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.highlight {
  padding: 2.5rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.highlight-eyebrow {
  margin-bottom: 0.65rem;
}

.highlight-body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.highlight h2 {
  font-size: clamp(1.85rem, 3.5vw, 2.5rem);
  margin: 0 0 0.85rem;
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

@media (max-width: 1100px) {
  .journey {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 960px) {
  .hero-grid,
  .pillar-grid,
  .outcome-grid,
  .highlight-body,
  .teaser-grid,
  .compare-grid {
    grid-template-columns: 1fr;
  }

  .journey {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .journey-step {
    padding: 1.35rem 0 1.75rem;
  }

  .journey-arrow {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0.15rem;
    color: var(--accent);
    opacity: 0.55;
    font-size: 0.9rem;
  }

  .hero {
    min-height: auto;
    padding-top: 2.5rem;
  }

  .hero-visual {
    order: -1;
  }

  .hero-title {
    max-width: none;
  }

  .hero-trail {
    opacity: 0.35;
    height: 18%;
  }

  .cta-panel {
    padding: 2rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-glow,
  .hero-orb,
  .hero-title,
  .marquee-track,
  .trail-line,
  .trail-dot,
  .scan-beam,
  .metric-chip.show {
    animation: none !important;
  }

  .hero-demo.active .hero-panel,
  .hero-demo.scanning .hero-panel {
    transform: none;
  }
}
</style>
