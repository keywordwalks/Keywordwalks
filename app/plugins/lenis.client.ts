import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  })

  let frame = 0
  const raf = (time: number) => {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  document.documentElement.classList.add('lenis')

  const onAnchorClick = (event: MouseEvent) => {
    const target = (event.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null
    if (!target) return
    const hash = target.getAttribute('href')
    if (!hash || hash === '#') return
    const el = document.querySelector(hash)
    if (!el) return
    event.preventDefault()
    lenis.scrollTo(el as HTMLElement, { offset: -88 })
  }

  document.addEventListener('click', onAnchorClick)

  nuxtApp.hook('page:finish', () => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        requestAnimationFrame(() => lenis.scrollTo(el as HTMLElement, { offset: -88, immediate: false }))
        return
      }
    }
    lenis.scrollTo(0, { immediate: true })
  })

  nuxtApp.provide('lenis', lenis)

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onAnchorClick)
      document.documentElement.classList.remove('lenis')
      lenis.destroy()
    })
  }
})
