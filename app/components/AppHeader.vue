<script setup lang="ts">
const route = useRoute()
const open = ref(false)
const scrolled = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
]

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 24
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="header" :class="{ open, scrolled }">
    <div class="container bar">
      <NuxtLink to="/" class="brand" aria-label="keywordwalks home">
        <img
          class="logo"
          src="/keywordwalks.png"
          alt="keywordwalks"
          width="320"
          height="64"
        >
      </NuxtLink>

      <nav id="site-nav" class="nav">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ active: route.path === link.to }"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          class="btn btn-primary nav-cta"
          href="https://chromewebstore.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          @click="open = false"
        >
          Add to Chrome
        </a>
      </nav>

      <button
        class="menu"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(0, 0, 0, 0.55);
  border-bottom: 1px solid transparent;
  transition:
    background 0.35s var(--ease-out),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.86);
  border-bottom-color: var(--border);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
}

.bar {
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: height 0.35s var(--ease-out);
}

.header.scrolled .bar {
  height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  line-height: 0;
  transition: transform 0.35s var(--ease-spring);
}

.brand:hover {
  transform: scale(1.02);
}

.logo {
  display: block;
  height: 3.35rem;
  width: auto;
  max-width: min(300px, 62vw);
  object-fit: contain;
  object-position: left center;
  transition: height 0.35s var(--ease-out), filter 0.35s ease;
}

.header.scrolled .logo {
  height: 2.85rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-link {
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 500;
  transition:
    color 0.25s ease,
    background 0.25s ease,
    transform 0.25s var(--ease-spring);
}

.nav-link:hover {
  color: var(--text);
  background: var(--accent-dim);
  transform: translateY(-1px);
}

.nav-link.active {
  color: var(--accent);
  background: var(--accent-dim);
}

.nav-cta {
  margin-left: 0.5rem;
  padding: 0.65rem 1.1rem;
  font-size: 0.88rem;
}

.menu {
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.menu:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

.menu span {
  display: block;
  width: 1rem;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.3s var(--ease-spring);
}

.header.open .menu span:first-child {
  transform: translateY(3.25px) rotate(45deg);
}

.header.open .menu span:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

@media (max-width: 820px) {
  .logo,
  .header.scrolled .logo {
    height: 2.85rem;
    max-width: min(250px, 58vw);
  }

  .menu {
    display: inline-flex;
  }

  .nav {
    position: fixed;
    inset: var(--header-h) 0 auto 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.25rem 1.25rem;
    background: rgba(0, 0, 0, 0.96);
    border-bottom: 1px solid var(--border);
    gap: 0.25rem;
    animation: nav-drop 0.35s var(--ease-out);
  }

  .header.open .nav {
    display: flex;
  }

  .nav-cta {
    margin: 0.75rem 0 0;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .bar {
    height: 72px;
  }

  .header.scrolled .bar {
    height: 64px;
  }

  .logo,
  .header.scrolled .logo {
    height: 2.4rem;
    max-width: min(200px, 55vw);
  }
}

@keyframes nav-drop {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
