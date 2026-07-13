<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — keywordwalks',
  description:
    'How keywordwalks handles data: client-side analysis, Chrome storage, and no backend collection.',
})
</script>

<template>
  <div class="legal-page">
    <div class="container">
      <Reveal as="h1" variant="blur">Privacy Policy</Reveal>
      <Reveal as="p" class="meta" :delay="80">Last updated: July 13, 2026</Reveal>

      <Reveal class="legal-prose" :delay="140">
        <p>
          keywordwalks (“we”, “the extension”, “the product”) is a Chrome browser extension
          and accompanying marketing website. This Privacy Policy explains what information is
          processed when you use the extension and this website.
        </p>

        <h2>1. Summary</h2>
        <p>
          The extension is designed to analyze the currently open webpage entirely on your device.
          We do not operate a backend that receives page content, SEO reports, or account credentials
          from the extension. There are no user accounts.
        </p>

        <h2>2. Information processed by the extension</h2>
        <p>When you run an analysis, the extension may read and process:</p>
        <ul>
          <li>The URL and rendered DOM of the active tab (on pages you choose to analyze)</li>
          <li>On-page signals such as titles, meta tags, headings, links, images, and structured data</li>
          <li>Optional performance timings and lab Core Web Vitals for the current page load</li>
          <li>Optional same-origin fetches such as robots.txt or sitemap peeks when enabled by the analysis flow</li>
          <li>Settings you configure (for example keywords, SPA wait, analysis budget, side panel preferences)</li>
        </ul>
        <p>
          Analysis results, caches, score history, audit history, and fix checklist state are stored
          locally using Chrome extension storage on your browser profile. This data stays on your device
          unless you export it yourself (for example Markdown, JSON, or PDF).
        </p>

        <h2>3. What we do not collect</h2>
        <ul>
          <li>No login, email, or account registration</li>
          <li>No remote upload of full page HTML or generated SEO reports to our servers</li>
          <li>No advertising trackers embedded in the extension for selling personal data</li>
        </ul>

        <h2>4. Permissions</h2>
        <p>
          The extension may request browser permissions required to read the active tab, run a
          content script, open a side panel, show a context menu item, or store settings. These
          permissions exist so analysis can run locally — not to transmit your browsing history to us.
        </p>

        <h2>5. This marketing website</h2>
        <p>
          This website is a static / Nuxt-rendered informational site. Standard web server or hosting
          logs (such as IP address, user agent, and requested URL) may be collected by the host
          provider as part of normal website operation. We do not use the site to create extension
          user accounts.
        </p>

        <h2>6. Third-party services</h2>
        <p>
          If you load fonts or other assets from third-party CDNs while visiting this website, those
          providers may process connection data according to their own policies. The extension’s
          analysis path itself does not depend on a proprietary ranking API.
        </p>

        <h2>7. Data retention and control</h2>
        <p>
          Local extension data persists until you clear it, uninstall the extension, or remove browser
          storage for the extension. You can delete history entries from within the extension UI where
          that feature is available, or remove the extension entirely to delete its local storage.
        </p>

        <h2>8. Children’s privacy</h2>
        <p>
          The product is intended for general professional and educational use and is not directed at
          children under 13.
        </p>

        <h2>9. Changes</h2>
        <p>
          We may update this Privacy Policy as the product evolves. The “Last updated” date at the top
          of this page will change when revisions are published.
        </p>

        <h2>10. Contact</h2>
        <p>
          For privacy questions about keywordwalks, contact the project maintainer through
          the repository or distribution channel where you obtained the extension.
        </p>
      </Reveal>
    </div>
  </div>
</template>
