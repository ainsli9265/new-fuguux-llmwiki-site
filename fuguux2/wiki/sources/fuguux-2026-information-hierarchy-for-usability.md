---
type: source
title: "Information Hierarchy for Usability (FuguUX)"
tags: [heuristics, web-design, usability, design-principles]
related: [accessibility, trust-and-credibility, action-buttons, typography, form-design, interface-design-principles, browsable-content, responsive-web-design, mobile-first-design, modal-dialogs, internationalization, fitts-law, hicks-law, wai-aria, wcag]
sources: [fuguux-2026-information-hierarchy-for-usability.pdf]
created: 2026-06-30
updated: 2026-06-30
authors: [FuguUX]
year: 2026
url: ""
venue: "FuguUX internal document"
---

# Information Hierarchy for Usability (FuguUX)

Internal FuguUX working document organized as a hierarchical heuristic checklist for evaluating and improving web sites. Covers eight primary sections for web design plus separate checklists for email (out of scope), mobile, accessibility, quality assurance, and first impressions.

## Section coverage

**1. Visual Design**: above-the-fold spacing and visual balance, color harmony and image quality, text readability (line-height 1.4–1.6×, appropriate margins, avoiding pure black text), typography (web-safe typefaces, font count, typographic details), favicon. New content folded into [[typography]] (line-height and pure-black guidance).

**2. Site Content**: text quality and plain language, page structure conventions (header: brand + navbar; footer: privacy policy + contact + sitemap + social), paragraph organization for skimming and scanning, internationalization (URL/hreflang structure, RTL support, text expansion, localized currencies/dates/times), credibility signals (HTTPS, policies, stock image limits, physical address, third-party credentials). New content folded into [[trust-and-credibility]] and [[internationalization]].

**3. Performance**: load time targets, JavaScript optimization, interaction performance, SEO metadata, Lighthouse Core Web Vitals (LCP, FID, TTFB, FCP, FMP, FP). Largely out of scope — implementation/tooling focus. SEO metadata overlaps with existing content in [[homepage-portal]]; Lighthouse metrics are tooling specifics, not design principles.

**4. Interaction Flow / Human-Centered Design**: accessibility (WAI/WCAG/ARIA, skip-to-content, visible focus indicators, modal focus trapping, alt text conventions, ARIA live regions for dynamic content, form label association), navigation (visible/persistent nav, [[hicks-law|Hick's Law]] implications for menu depth), navigation bar and menus (information scent in category names, [[fitts-law|Fitts' Law]] for full-area clickable targets, coherent grouping), [[modal-dialogs]] (on-screen appearance, Escape closes, context-specific button labels, keyboard focus management), forms (Enter key behavior, no reset button, don't disable submit button), submit/confirmation behavior, widgets (affordance, feedback, feedforward, tooltips, z-order), links (information scent, distinct color, visited link treatment), buttons (verb labels, full-area clickable, target size, grouped button selection indicator, chevron/+ icon for more choices), icons, dropdowns, search bar, notifications/alerts (limited to reduce fatigue, auto-timeout, user-dismissible, snackbar/toast/banner patterns). New content folded into [[accessibility]], [[action-buttons]], [[form-design]], [[interface-design-principles]], [[browsable-content]], and new page [[modal-dialogs]].

**5. Standards and Compliance**: browser keyboard shortcut respect (Ctrl-A, Back, etc.), plain-language privacy policy with user choice on tracking, HTTPS for logins, readable/clean URLs. Partially folded into [[trust-and-credibility]]. Specific security implementation details (XSS, URL injection prevention) and the specific keyboard shortcut list are out of scope (code implementation).

**6. Web Development Foundations**: HTML/CSS/JavaScript specifics — entirely out of scope per purpose.md (code implementation). No content folded in.

**7. Responsive Design**: cross-screen-size adaptation, browser compatibility, mobile and tablet gesture support, touch target sizing (~44px minimum), pinch zoom. Overlaps with [[responsive-web-design]] and [[mobile-first-design]]; touch target sizing reinforces [[fitts-law]]. No new standalone concept pages — content already well-covered.

**8. Delight**: avoiding attention competition — too much animation, too many CTAs, too many typefaces, too many bright colors, automated slideshows, pop-ups, offering too many choices for the same action. Folded into [[interface-design-principles]] (extension of principle 7, minimalism).

**Mobile Heuristics**: touch targets ≥44px, no horizontal scroll, no clipped text, readable without zooming, no layout shift, no intrusive pop-ups, fast load, back button works, forms mobile-friendly. Overlaps with [[responsive-web-design]] and [[mobile-first-design]]; [[fitts-law]] already covers touch target sizing. No new content needed.

**Accessibility Heuristics**: skip-to-content link, keyboard navigation with logical tab order, visible focus indicators, modal focus trapping, heading hierarchy (no skipped levels), descriptive link text (not "click here"), empty alt for decorative images vs. descriptive alt for functional images, icon button accessible names (hamburger/search/close), ARIA live regions for dynamic content, form label association (no placeholder-only labeling). All folded into [[accessibility]].

**QA Heuristics**: functional testing checklist (links, forms, buttons, search, media, critical flows), visual consistency review (spacing, alignment, typography), interactive state testing (hover/focus/active), responsive layout verification, error handling review, security checks (HTTPS everywhere, helpful error pages). Primarily a testing/QA checklist rather than a design principles source — content covered by existing concept pages. No new concept pages warranted.

**First Impressions Heuristics**: clarity within 3 seconds, strong visual hierarchy, clean uncluttered layout, high-quality hero section, professional typography, immediate trust signals; brand alignment (consistent color palette, tone of voice, visual style coherence, logo correctness, consistent interaction patterns); wow factor (micro-interactions, high-quality imagery, polished motion, memorable signature element, modern design patterns, emotional resonance); credibility (no visual glitches, fast load, polished copy, clear confident CTAs, consistent spacing and rhythm). Overlaps with [[trust-and-credibility]], [[visual-hierarchy]], [[clear-first-reads]], and [[homepage-portal]]; no new concept pages — brief additions folded into [[trust-and-credibility]] and [[interface-design-principles]].
