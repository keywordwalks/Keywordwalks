<script setup lang="ts">
const progress = ref(0)
const visible = ref(false)

onMounted(() => {
  const update = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    visible.value = window.scrollY > 40
  }

  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })
})
</script>

<template>
  <div class="scroll-progress" :class="{ visible }" aria-hidden="true">
    <div class="scroll-progress-bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 80;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.scroll-progress.visible {
  opacity: 1;
}

.scroll-progress-bar {
  height: 100%;
  width: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-lime));
  box-shadow: 0 0 12px rgba(0, 232, 240, 0.45);
  will-change: transform;
}
</style>
