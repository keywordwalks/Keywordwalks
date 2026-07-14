<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container grid">
      <div class="brand-block">
        <img
          class="footer-logo"
          src="/keywordwalks.png"
          alt="keywordwalks"
          width="360"
          height="72"
        >
        <p class="muted">
          Research workspace for the open tab. Research. Analyze. Compare. Improve. Publish —
          privately in Chrome.
        </p>
      </div>

      <div class="link-cols">
        <div class="col">
          <p class="label">Product</p>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/features">Features</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/#get-started">Add to Chrome</NuxtLink>
        </div>

        <div class="col">
          <p class="label">Legal</p>
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <p>© {{ year }} keywordwalks. All rights reserved.</p>
      <p class="muted">Research workspace · local analysis · MIT-licensed extension</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.25);
  padding: 3.5rem 0 1.75rem;
  margin-top: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
}

.link-cols {
  display: contents;
}

.footer-logo {
  display: block;
  height: 4rem;
  width: auto;
  max-width: 360px;
  object-fit: contain;
  object-position: left center;
  margin-bottom: 0.85rem;
  transition: transform 0.35s var(--ease-spring), filter 0.35s ease;
}

.brand-block:hover .footer-logo {
  transform: scale(1.03);
  filter: drop-shadow(0 0 12px rgba(0, 232, 240, 0.25));
}

.brand-block .muted {
  max-width: 28rem;
  font-size: 0.95rem;
}

.label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.85rem;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.col a {
  color: var(--text-muted);
  font-size: 0.95rem;
  width: fit-content;
  transition: color 0.25s ease, transform 0.25s var(--ease-spring);
}

.col a:hover {
  color: var(--accent);
  transform: translateX(4px);
}

.bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border);
  font-size: 0.85rem;
  color: var(--text-dim);
}

@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .link-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 2.5rem 0 1.5rem;
  }

  .footer-logo {
    height: 3rem;
    max-width: 240px;
  }

  .link-cols {
    gap: 1.25rem;
  }

  .bottom {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
