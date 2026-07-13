// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'keywordwalks',
      htmlAttrs: { lang: 'en', class: 'dark' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'keywordwalks helps bloggers, content creators, and SEO professionals improve search rankings with local keyword research, on-page SEO audits, indexing checks, and actionable fixes in Chrome.',
        },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:title', content: 'keywordwalks — Keywords, research, SEO' },
        {
          property: 'og:description',
          content:
            'On-page SEO for bloggers, creators, and SEO pros. Analyze keywords, metadata, structure, performance, and indexing — privately in your browser.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Syne:wght@600;700;800&display=swap',
        },
      ],
    },
  },

  css: ['lenis/dist/lenis.css', '~/assets/css/main.css'],
})
