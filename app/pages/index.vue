<script setup lang="ts">
const storeUrl = 'https://chromewebstore.google.com/'
const ctaFriction = 'No Signup · 30 Seconds Setup'

useSeoMeta({
  title: 'KeywordWalks — Research workspace for the open tab',
  description:
    'Research. Analyze. Compare. Improve. Publish. KeywordWalks is a private Chrome research workspace for bloggers, creators, and SEO pros.',
})

const reduceMotion = ref(false)
const heroReady = ref(false)
const heroActive = ref(false)
const scanPlaying = ref(false)
const metricsReady = ref(false)

const spotlight = reactive({ x: 70, y: 40, on: false })
const parallax = reactive({ x: 0, y: 0 })

const heroRef = ref<HTMLElement | null>(null)
const demoRef = ref<HTMLElement | null>(null)

let scanTimer: ReturnType<typeof setTimeout> | null = null
let typeTimer: ReturnType<typeof setTimeout> | null = null
let serpTimer: ReturnType<typeof setInterval> | null = null
let countRaf = 0

const metricHighlights = reactive([
  { label: 'SEO score', target: 78, display: 0, fill: 0, top: '16%', left: '10%' },
  { label: 'Content', target: 72, display: 0, fill: 0, top: '36%', left: '56%' },
  { label: 'Difficulty', target: 64, display: 0, fill: 0, top: '58%', left: '18%' },
])

const floatChips = [
  { label: 'keyword gap', top: '8%', left: '-4%', delay: '0s' },
  { label: 'competitor', top: '22%', left: '88%', delay: '0.6s' },
  { label: 'on-page', top: '72%', left: '-6%', delay: '1.2s' },
  { label: 'intent', top: '78%', left: '86%', delay: '1.8s' },
  { label: 'score', top: '48%', left: '92%', delay: '0.3s' },
]

const searchPhrases = [
  'competitorsite.com/blog/...',
  'my draft — untitled post',
  'best seo tools 2026',
]
const typedText = ref('')
const phraseIndex = ref(0)

const serpResults = [
  { rank: 1, title: 'Ultimate ML Guide' },
  { rank: 2, title: 'What is AI? Explained' },
  { rank: 3, title: 'Machine Learning Basics' },
]
const serpHighlight = ref(0)

function animateCounts() {
  if (reduceMotion.value) {
    for (const m of metricHighlights) {
      m.display = m.target
      m.fill = m.target
    }
    metricsReady.value = true
    return
  }
  const start = performance.now()
  const duration = 1400
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - (1 - t) ** 3
    for (const m of metricHighlights) {
      m.display = Math.round(m.target * eased)
      m.fill = Math.round(m.target * eased)
    }
    if (t < 1) countRaf = requestAnimationFrame(tick)
    else metricsReady.value = true
  }
  countRaf = requestAnimationFrame(tick)
}

function playScan() {
  if (scanPlaying.value) return
  scanPlaying.value = true
  if (!metricsReady.value) animateCounts()
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

function onHeroPointer(e: PointerEvent) {
  if (reduceMotion.value || !heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  spotlight.x = ((e.clientX - rect.left) / rect.width) * 100
  spotlight.y = ((e.clientY - rect.top) / rect.height) * 100
  spotlight.on = true
  if (demoRef.value) {
    const d = demoRef.value.getBoundingClientRect()
    const px = (e.clientX - d.left) / d.width - 0.5
    const py = (e.clientY - d.top) / d.height - 0.5
    parallax.x = px * 10
    parallax.y = py * 8
  }
}

function onHeroPointerLeave() {
  spotlight.on = false
  parallax.x = 0
  parallax.y = 0
}

function typeLoop() {
  if (reduceMotion.value) {
    typedText.value = searchPhrases[0]
    return
  }
  const phrase = searchPhrases[phraseIndex.value]
  let i = 0
  typedText.value = ''
  const typeNext = () => {
    if (i <= phrase.length) {
      typedText.value = phrase.slice(0, i)
      i += 1
      typeTimer = setTimeout(typeNext, 42)
      return
    }
    typeTimer = setTimeout(() => {
      phraseIndex.value = (phraseIndex.value + 1) % searchPhrases.length
      typeLoop()
    }, 1600)
  }
  typeNext()
}

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  requestAnimationFrame(() => {
    heroReady.value = true
  })
  typeLoop()
  if (!reduceMotion.value) {
    setTimeout(() => playScan(), 700)
    serpTimer = setInterval(() => {
      serpHighlight.value = (serpHighlight.value + 1) % serpResults.length
    }, 1800)
  } else {
    animateCounts()
  }
})

onBeforeUnmount(() => {
  if (scanTimer) clearTimeout(scanTimer)
  if (typeTimer) clearTimeout(typeTimer)
  if (serpTimer) clearInterval(serpTimer)
  if (countRaf) cancelAnimationFrame(countRaf)
})

const philosophy = [
  {
    title: 'Clarity over volume',
    body: 'One page. One path. Prioritized next steps — not forty charts fighting for attention.',
  },
  {
    title: 'Work where the page lives',
    body: 'Their blog, your draft, a client URL. Research in Chrome, on the live page, without cloud scrapes.',
  },
  {
    title: 'Private by design',
    body: 'Drafts, staging, and client sites stay on your machine. No login. No account wall.',
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
    body: 'Ship posts that earn readers — not guesswork. Research gaps before you publish, then re-walk after edits.',
  },
  {
    title: 'Content creators',
    body: 'Turn competitive pages into a briefing. Know depth, structure, and hooks before you draft.',
  },
  {
    title: 'SEO professionals',
    body: 'Research faster, explain clearer, export for clients. History, compare, and prioritized fixes.',
  },
]

const outcomes = [
  {
    title: 'Write faster, with less guesswork',
    body: 'See what the page already covers — and what’s missing — so your next draft starts with direction.',
  },
  {
    title: 'Steal the ranking path, not just keywords',
    body: 'Walk a competitor’s page and uncover placement, structure, and signals that explain why they’re ahead.',
  },
  {
    title: 'More clicks from titles that actually work',
    body: 'Title, meta, headings, and previews in one pass — so snippets earn the click.',
  },
  {
    title: 'Unblock pages that should already rank',
    body: 'Catch indexing and technical blockers — then fix, re-audit, and prove the lift.',
  },
]

const journey = [
  { step: '01', title: 'Research', body: 'Open a draft, competitor, or client URL.' },
  { step: '02', title: 'Analyze', body: 'One click — sixteen analyzers on the live DOM.' },
  { step: '03', title: 'Compare', body: 'Diff scores and category gaps vs History.' },
  { step: '04', title: 'Improve', body: 'Prioritized fixes with copy-ready snippets.' },
  { step: '05', title: 'Publish', body: 'Ship the change. Re-walk to prove progress.' },
  { step: '06', title: 'Repeat', body: 'Your ranking trail stays on this device.' },
]

const trustItems = [
  'Research',
  'Analyze',
  'Compare',
  'Improve',
  'Publish',
  'No signup',
  'History & Compare',
  '30 seconds setup',
]

const freeTeasers = [
  {
    title: 'History',
    body: 'Your research trail, saved locally — reopen any past audit in one click.',
    image: '/histioryfeature.png',
    alt: 'KeywordWalks Audit history panel',
    to: '/features#history',
    badge: 'Included now',
  },
  {
    title: 'Compare',
    body: 'See exactly why their page scores higher — deltas in green and red.',
    image: '/comparefeature.png',
    alt: 'KeywordWalks Compare score delta view',
    to: '/features#compare',
    badge: 'Included now',
  },
  {
    title: 'Settings',
    body: 'Tune keywords, SPA wait, and analysis depth — power controls, no account required.',
    image: '/settingsfeature.png',
    alt: 'KeywordWalks Settings panel',
    to: '/features#settings',
    badge: 'Included now',
  },
]
</script>

<template>
  <div class="home">
    <section
      ref="heroRef"
      class="hero"
      :class="{ ready: heroReady }"
      @pointermove="onHeroPointer"
      @pointerleave="onHeroPointerLeave"
    >
      <div
        class="hero-spotlight"
        aria-hidden="true"
        :style="{
          opacity: spotlight.on ? 1 : 0,
          background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,232,240,0.14), transparent 55%)`,
        }"
      />
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
          <Reveal as="p" class="eyebrow" :delay="0">Research workspace · in Chrome</Reveal>
          <Reveal as="h1" class="display hero-title" variant="blur" :delay="80">
            Find keywords your<br />competitors forgot.
          </Reveal>
          <Reveal as="p" class="lede" :delay="180">
            Research. Analyze. Compare. Improve. Publish. Walk any open page — privately —
            and leave with a clear next step. Not another SEO tool. A research workspace.
          </Reveal>
          <Reveal class="cta-stack" :delay="280">
            <div class="cta-row">
              <a
                class="btn btn-primary"
                :href="storeUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Chrome
              </a>
              <NuxtLink to="#why" class="btn btn-ghost">Why KeywordWalks</NuxtLink>
            </div>
            <p class="cta-friction">{{ ctaFriction }}</p>
          </Reveal>
        </div>

        <Reveal class="hero-visual" variant="right" :delay="200">
          <div ref="demoRef" class="demo-wrap">
            <span
              v-for="chip in floatChips"
              :key="chip.label"
              class="float-chip"
              :style="{ top: chip.top, left: chip.left, animationDelay: chip.delay }"
              aria-hidden="true"
            >
              {{ chip.label }}
            </span>

            <div class="search-mock" aria-hidden="true">
              <span class="search-icon" />
              <span class="search-text">{{ typedText }}<span class="caret" /></span>
            </div>

            <button
              type="button"
              class="hero-demo"
              :class="{ active: heroActive, scanning: scanPlaying, ready: heroReady }"
              aria-label="Play KeywordWalks demo scan. Hover or click to animate."
              @mouseenter="onHeroEnter"
              @mouseleave="onHeroLeave"
              @focus="onHeroEnter"
              @blur="onHeroLeave"
              @click="playScan"
            >
              <span class="demo-hint">Hover to scan</span>
              <div
                class="hero-panel"
                :style="{
                  transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
                }"
              >
                <img
                  class="hero-shot"
                  src="/hero.png"
                  alt="KeywordWalks research workspace showing Overview score and insights"
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
                  :class="{ show: heroActive || scanPlaying || metricsReady }"
                  :style="{ top: m.top, left: m.left, animationDelay: `${i * 0.18}s` }"
                >
                  <span class="metric-label">{{ m.label }}</span>
                  <span class="metric-value">{{ m.display }}</span>
                  <span class="metric-bar" aria-hidden="true">
                    <span class="metric-fill" :style="{ width: `${m.fill}%` }" />
                  </span>
                </span>
              </div>
            </button>

            <div class="serp-mock" aria-hidden="true">
              <p class="serp-label">Live SERP path</p>
              <ul>
                <li
                  v-for="(row, i) in serpResults"
                  :key="row.rank"
                  :class="{ hot: serpHighlight === i }"
                >
                  <span class="serp-rank">{{ row.rank }}</span>
                  <span>{{ row.title }}</span>
                </li>
              </ul>
            </div>
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

    <section id="why" class="section why-section">
      <div class="container">
        <Reveal class="section-head">
          <p class="eyebrow">Why KeywordWalks?</p>
          <h2>Most tools overwhelm you. A research workspace shows the path.</h2>
          <p>
            KeywordWalks doesn’t dump endless data. It tells you what matters on the page you’re
            looking at, why it matters, and what to do next — so you can research, improve, and publish
            with confidence.
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
          <h2>One research workspace. Three ways to win.</h2>
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
          <h2>Research. Analyze. Compare. Improve. Publish.</h2>
          <p>The path of a research workspace — not a grid of feature cards.</p>
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
          <p class="eyebrow">Included now</p>
          <h2>History. Compare. Settings.</h2>
          <p>
            Workflow tools other products lock away — available in KeywordWalks with no account
            and no signup. Install and start researching in about 30 seconds.
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
              <span class="teaser-badge">{{ item.badge }}</span>
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
          <h2>Add KeywordWalks. Research your first page.</h2>
          <p class="muted">
            No signup. About 30 seconds from store to first scan — then Research, Analyze, Compare,
            Improve, Publish on any open tab.
          </p>
          <ol class="steps-list">
            <li>Open KeywordWalks on the <strong>Chrome Web Store</strong></li>
            <li>Click <strong>Add to Chrome</strong> — no account required</li>
            <li>Pin KeywordWalks to your toolbar</li>
            <li>Open any page and walk the trail — or press Alt+Shift+S</li>
          </ol>
          <div class="cta-stack">
            <div class="cta-row">
              <a
                class="btn btn-primary"
                :href="storeUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Chrome
              </a>
              <NuxtLink to="/features" class="btn btn-ghost">Explore every feature</NuxtLink>
            </div>
            <p class="cta-friction">{{ ctaFriction }}</p>
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

.hero-spotlight {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.4s ease;
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
  animation: pulse-line 7s ease-in-out infinite, gradient-drift 14s ease-in-out infinite alternate;
}

@keyframes gradient-drift {
  from {
    transform: translate3d(-2%, 0, 0) scale(1);
  }
  to {
    transform: translate3d(3%, 2%, 0) scale(1.05);
  }
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
  margin-bottom: 1.5rem;
}

.cta-stack {
  display: grid;
  gap: 0.65rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.cta-friction {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--text-dim);
}

.demo-wrap {
  position: relative;
  padding: 1.75rem 0.5rem 0;
}

.float-chip {
  position: absolute;
  z-index: 2;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 232, 240, 0.25);
  background: rgba(0, 10, 12, 0.75);
  color: var(--accent);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0;
  animation: chip-float 5.5s ease-in-out infinite;
}

.hero.ready .float-chip {
  opacity: 0.85;
}

@keyframes chip-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.search-mock {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border-strong);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.55);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.search-icon {
  width: 0.7rem;
  height: 0.7rem;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  opacity: 0.8;
}

.search-icon::after {
  content: '';
  position: absolute;
  width: 0.35rem;
  height: 1.5px;
  background: var(--accent);
  right: -0.3rem;
  bottom: -0.15rem;
  transform: rotate(40deg);
}

.search-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 1.2em;
}

.caret {
  display: inline-block;
  width: 1.5px;
  height: 0.9em;
  margin-left: 1px;
  background: var(--accent);
  vertical-align: text-bottom;
  animation: caret-blink 1s steps(1) infinite;
}

@keyframes caret-blink {
  50% {
    opacity: 0;
  }
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
  opacity: 0;
  transform: translate3d(0, 28px, 0) scale(0.97);
  transition:
    opacity 0.85s var(--ease-out),
    transform 0.85s var(--ease-out);
  will-change: transform;
}

.hero-demo.ready {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
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
  will-change: transform;
  transition:
    box-shadow 0.4s var(--ease-out),
    border-color 0.4s ease;
}

.hero-demo.active .hero-panel,
.hero-demo.scanning .hero-panel {
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
  gap: 0.2rem;
  min-width: 5.5rem;
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

.metric-bar {
  display: block;
  height: 3px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.metric-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--accent-lime));
  transition: width 0.1s linear;
}

.serp-mock {
  margin: 0.85rem 0.75rem 0;
  padding: 0.75rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.4);
}

.serp-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.55rem;
}

.serp-mock ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.35rem;
}

.serp-mock li {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  padding: 0.3rem 0.4rem;
  border-radius: 8px;
  transition:
    background 0.35s ease,
    color 0.35s ease,
    transform 0.35s var(--ease-spring);
}

.serp-mock li.hot {
  background: rgba(0, 232, 240, 0.1);
  color: var(--text);
  transform: translateX(3px);
}

.serp-rank {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  width: 1rem;
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

  .pillar-grid,
  .teaser-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .float-chip {
    display: none;
  }

  .demo-hint {
    display: none !important;
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
    padding-bottom: 2.5rem;
  }

  .hero-visual {
    order: -1;
  }

  .hero-title {
    max-width: none;
    font-size: clamp(1.85rem, 7.5vw, 2.75rem);
  }

  .hero-trail {
    opacity: 0.35;
    height: 18%;
  }

  .demo-wrap {
    padding: 0.5rem 0 0;
  }

  .search-mock {
    margin: 0 0 0.65rem;
  }

  .serp-mock {
    display: none;
  }

  .metric-chip {
    min-width: 4.5rem;
    padding: 0.35rem 0.5rem;
  }

  .metric-value {
    font-size: 0.95rem;
  }

  .cta-panel {
    padding: 2rem 1.25rem;
  }

  .cta-row {
    flex-direction: column;
  }

  .cta-row .btn {
    width: 100%;
  }

  .cta-friction {
    text-align: center;
    font-size: 0.75rem;
    letter-spacing: 0.02em;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: 1.75rem;
    padding-bottom: 2rem;
  }

  .lede {
    font-size: 1rem;
  }

  .metric-chip {
    top: auto !important;
    left: auto !important;
    bottom: 0.65rem;
    right: 0.65rem;
  }

  .metric-chip ~ .metric-chip {
    display: none;
  }

  .compare-card {
    padding: 1.25rem 1rem;
  }

  .section {
    padding: 3.5rem 0;
  }
}

/* Touch / tablet / phone: never show hover hint */
@media (hover: none), (pointer: coarse) {
  .demo-hint {
    display: none !important;
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
  .float-chip,
  .caret,
  .gradient-drift {
    animation: none !important;
  }

  .hero-demo {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .hero-demo.active .hero-panel,
  .hero-demo.scanning .hero-panel {
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.55),
      0 0 40px rgba(0, 232, 240, 0.06),
      inset 0 1px 0 rgba(0, 232, 240, 0.08);
  }
}
</style>
