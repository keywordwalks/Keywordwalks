<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
    variant?: 'up' | 'fade' | 'left' | 'right' | 'scale' | 'blur'
    delay?: number
    once?: boolean
  }>(),
  {
    as: 'div',
    variant: 'up',
    delay: 0,
    once: true,
  },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  const node = el.value
  if (!node) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    visible.value = true
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true
        if (props.once) observer.disconnect()
      } else if (!props.once) {
        visible.value = false
      }
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(node)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="reveal-io"
    :class="[`reveal-${variant}`, { 'is-inview': visible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </component>
</template>
