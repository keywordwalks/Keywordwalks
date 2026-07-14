<script setup lang="ts">
import { PRIVACY_CONTACT_EMAIL, PRIVACY_CONTACT_MAILTO } from '~/utils/contact'

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
      <Reveal as="p" class="meta" :delay="80">Last updated: July 14, 2026</Reveal>

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
          from the extension. There are no user accounts. Analysis results stay in your browser
          unless you export them yourself.
        </p>
        <p>
          A lightweight content script may load on web pages so the extension can respond when you
          start an analysis, open the UI, or use highlights/overlays. Full reading of the page DOM
          for an SEO report runs only when you trigger analysis (toolbar, side panel, context menu,
          or keyboard shortcut)—not continuously in the background for browsing history.
        </p>

        <h2>2. Information processed by the extension</h2>
        <p>When you run an analysis, the extension may read and process:</p>
        <ul>
          <li>The URL and rendered DOM of the active tab (on pages you choose to analyze)</li>
          <li>On-page signals such as titles, meta tags, headings, links, images, and structured data</li>
          <li>Optional performance timings and lab Core Web Vitals for the current page load</li>
          <li>
            Optional same-origin network checks during analysis (for example robots.txt or sitemap
            peeks, and optional broken-link checks when enabled in settings)
          </li>
          <li>Settings you configure (for example keywords, SPA wait, analysis budget, side panel preferences)</li>
        </ul>
        <p>
          Analysis results, caches, score history, audit history, and fix checklist state are stored
          locally using Chrome extension storage (<code>chrome.storage.local</code>) on your browser
          profile. This data stays on your device unless you export it yourself (for example Markdown,
          JSON, or PDF).
        </p>

        <h2>3. What we do not collect</h2>
        <ul>
          <li>No login, email, or account registration</li>
          <li>No remote upload of full page HTML or generated SEO reports to our servers</li>
          <li>No sale of personal data</li>
          <li>No advertising trackers embedded in the extension for selling personal data</li>
        </ul>

        <h2>4. Permissions</h2>
        <p>
          Chrome will show permission prompts based on what the extension declares. We use these
          permissions so analysis can run locally — not to transmit your browsing history to us:
        </p>
        <ul>
          <li>
            <strong>activeTab</strong> — Access the page in the tab you are analyzing after you open
            the extension, use the context menu, or press the analyze shortcut.
          </li>
          <li>
            <strong>scripting</strong> — Inject or re-inject our content, highlight, and overlay
            scripts into the active tab when needed so analysis and on-page tools can run.
          </li>
          <li>
            <strong>storage</strong> — Save settings, report cache, audit history, score history, and
            fix checklist state on your device.
          </li>
          <li>
            <strong>sidePanel</strong> — Optional full-height side panel UI instead of the popup.
          </li>
          <li>
            <strong>contextMenus</strong> — Add “Analyze with keywordwalks” to the page context menu.
          </li>
          <li>
            <strong>Host access (<code>&lt;all_urls&gt;</code>)</strong> — Broad host permission so
            keywordwalks can run on the http/https site open in your tab: load a content script that
            listens for your analyze/highlight/overlay actions, read the rendered page when you
            analyze, and perform optional same-origin enrichment fetches (such as robots.txt,
            sitemap peeks, or broken-link checks). Page content is processed locally in your browser;
            we do not operate a server that receives analyzed HTML or SEO reports. The extension does
            not use this permission to build or upload a profile of your browsing history.
          </li>
        </ul>

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
          analysis path itself does not depend on a proprietary ranking API and does not send page
          content to third-party analysis backends.
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
          For privacy questions about keywordwalks, email
          <a :href="PRIVACY_CONTACT_MAILTO">{{ PRIVACY_CONTACT_EMAIL }}</a>.
        </p>
      </Reveal>
    </div>
  </div>
</template>
