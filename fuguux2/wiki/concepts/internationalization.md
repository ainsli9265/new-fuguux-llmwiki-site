---
type: concept
title: Internationalization
tags: [content-design, information-architecture, localization, accessibility]
related: [typography, trust-and-credibility, responsive-web-design, accessibility, fuguux-2026-information-hierarchy-for-usability]
sources: [fuguux-2026-information-hierarchy-for-usability.pdf]
created: 2026-06-30
updated: 2026-06-30
---

# Internationalization

**Internationalization** (abbreviated i18n) is the practice of designing a site so it can be adapted for different languages, regions, and cultures without re-engineering the core product. **Localization** (l10n) is the subsequent act of adapting a specific locale's content and formatting. Getting i18n wrong forces retroactive engineering work; building it in from the start is far cheaper than retrofitting.

## URL structure and language signaling

Sites serving multiple locales need a URL strategy that is both machine-readable (for search engines) and human-understandable:

- **Country-code top-level domains** (ccTLDs) — e.g., `example.fr`, `example.de` — provide the strongest geo-targeting signal but require separate domain registrations and distinct infrastructure per country.
- **Subdirectories** — e.g., `example.com/fr/` — are operationally simpler, consolidate domain authority, and are preferred for most sites.
- **Subdomains** — e.g., `fr.example.com` — are treated by search engines similarly to separate sites; avoid unless there is a specific infrastructure reason.

**`hreflang` tags** tell search engines which page is the canonical version for each language/region combination, preventing duplicate-content penalties. Every localized page should include `hreflang` annotations for all its equivalents.

## CMS and translation infrastructure

The CMS must support multi-language content management — the ability to store, retrieve, and edit content independently per locale — before localization work can begin. Retrofitting a monolingual CMS is significantly more expensive than choosing one that supports i18n from the start.

## Designing for text expansion

Translated content is routinely 20–40% longer or shorter than the English source — German and Finnish text expands; Chinese and Japanese text contracts. UI layouts that depend on fixed text widths break under translation:

- Use flexible/fluid layouts, not fixed-width text containers (see [[responsive-web-design]])
- Avoid truncation in buttons, navigation labels, or other key UI strings — truncation obscures meaning and the degree of truncation varies by locale
- Test with placeholder "long strings" during layout design, before translations exist

## Right-to-left (RTL) language support

Arabic, Hebrew, Persian, and Urdu are written right-to-left. RTL support is not simply mirroring text — it requires:

- Declaring `dir="rtl"` on the HTML element or specific containers
- Ensuring that layout (sidebars, reading order, iconography direction) mirrors logically, not only typographically
- Testing with actual RTL users — automated mirroring handles most cases but misses culturally-specific conventions

Decide early whether RTL is in scope; adding it after a site is built is a significant rework, not a flag flip.

## Localized formats

Numbers, dates, times, and currency are formatted differently by locale and must be localized, not merely translated:

- **Currency**: symbol placement varies (€100 vs. 100 €); decimal and thousands separators vary (1,000.00 vs. 1.000,00); always show the currency code (USD, EUR, JPY) for international audiences in addition to the symbol
- **Dates**: MM/DD/YYYY (United States) vs. DD/MM/YYYY (most of Europe) vs. YYYY-MM-DD (ISO 8601); ambiguous formats (06/07) read as June 7 or July 6 depending on locale; use unambiguous formats or spelled-out month names for user-facing dates
- **Time**: 12-hour vs. 24-hour convention; time zone display and conversion
- **Phone numbers**: formatting conventions differ significantly by country; avoid enforcing a single input mask

See also [[typography]] — typeface selection and spacing conventions vary across scripts (Latin, CJK, Arabic, Devanagari), and text rendering requirements differ from those of Latin-script languages.

## Further reading

*ReForm: Free Chapters and Tips* (ungated PDF, no stated open license; see `raw/copyrighted/reform-free-chapters-and-tips.pdf`) illustrates locale-specific form field adaptation: the worked example shows a Russian address form that replaces "Zip Code" with "Postal Code" and removes the "State" field entirely, since Russian postal addresses use neither concept.
