<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service — SEO Reverse Engineer',
  description:
    'Terms governing use of the SEO Reverse Engineer Chrome extension and marketing website.',
})
</script>

<template>
  <div class="legal-page">
    <div class="container">
      <Reveal as="h1" variant="blur">Terms of Service</Reveal>
      <Reveal as="p" class="meta" :delay="80">Last updated: July 13, 2026</Reveal>

      <Reveal class="legal-prose" :delay="140">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the SEO Reverse Engineer
          Chrome extension, related documentation, and this marketing website (collectively, the
          “Service”). By installing or using the Service, you agree to these Terms.
        </p>

        <h2>1. The Service</h2>
        <p>
          SEO Reverse Engineer provides client-side on-page SEO analysis tools that inspect the
          rendered content of pages you choose to analyze in your browser. Features may include
          scoring, issue detection, history, compare, overlays, exports, and configurable settings.
          Functionality may change between versions.
        </p>

        <h2>2. License</h2>
        <p>
          The extension source is offered under the MIT License unless a specific file states
          otherwise. You may use, copy, modify, and distribute the software in accordance with that
          license. These Terms do not limit rights granted to you under the MIT License for the
          software itself.
        </p>

        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service in violation of applicable laws or third-party rights</li>
          <li>Attempt to circumvent browser security controls or abuse extension permissions</li>
          <li>Misrepresent analysis outputs as official Google Search Console or ranking guarantees</li>
          <li>Use automated means to overload sites in a way that violates those sites’ terms or law</li>
        </ul>

        <h2>4. No ranking guarantees</h2>
        <p>
          SEO signals and scores are heuristic and educational. Search engine rankings depend on many
          factors outside the Service’s control. The Service does not guarantee improved rankings,
          traffic, or revenue.
        </p>

        <h2>5. Accuracy and limitations</h2>
        <p>
          Analysis is limited to the rendered DOM and available browser APIs. Some checks (such as
          broken links or lab performance metrics) may be incomplete, timed out, or unavailable.
          Results may differ from crawl-based tools, CrUX field data, or Search Console reports.
        </p>

        <h2>6. Your content and responsibility</h2>
        <p>
          You are responsible for the pages you analyze and for any exports you create or share.
          Do not use the Service on content you are not authorized to inspect. Local storage of
          reports and settings is your responsibility to manage and secure on your device.
        </p>

        <h2>7. Website content</h2>
        <p>
          Marketing pages describe product capabilities in good faith but may not reflect every build
          or experimental feature. If documentation and the installed extension differ, the installed
          extension behavior controls for that version.
        </p>

        <h2>8. Disclaimer of warranties</h2>
        <p>
          THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE AUTHORS AND DISTRIBUTORS OF THE SERVICE SHALL
          NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE.
        </p>

        <h2>10. Changes and termination</h2>
        <p>
          We may update these Terms by posting a revised version with an updated date. Continued use
          after changes constitutes acceptance. You may stop using the Service at any time by
          uninstalling the extension and discontinuing use of the website.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws applicable in the jurisdiction of the project
          maintainer, without regard to conflict-of-law principles, except where mandatory consumer
          protections apply.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these Terms can be directed to the project maintainer through the
          repository or distribution channel where you obtained the Service.
        </p>
      </Reveal>
    </div>
  </div>
</template>
