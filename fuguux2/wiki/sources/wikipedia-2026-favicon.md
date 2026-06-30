---
type: source
title: "Favicon (Wikipedia)"
tags: [favicon, browser-ui, branding, web-standards]
related: [favicon, trust-and-credibility, seo-basics, responsive-web-design]
created: 2026-06-30
updated: 2026-06-30
authors: [Wikipedia contributors]
year: 2026
url: "https://en.wikipedia.org/wiki/Favicon"
venue: Wikipedia (CC BY-SA 4.0)
---

# Favicon (Wikipedia)

Wikipedia's article on favicons: the small icons associated with a website or web page, displayed in browser tabs, bookmarks, address bars, and as home-screen icons on mobile devices.

## Key points

- Introduced by Microsoft in Internet Explorer 5 (March 1999) as `favicon.ico` in the site root directory; originally only appeared for bookmarked pages, now displayed on every page load in all modern browsers.
- Standardized in the HTML living standard via `<link rel="icon">` in the document `<head>`; `rel="shortcut icon"` is a legacy form still widely supported.
- **Standard sizes**: 16×16 (browser tab), 32×32 (bookmark/taskbar), 48×48–64×64 (desktop shortcut). Mobile home screen requires larger sizes: 180×180 (iPhone), 167×167 (iPad), 192×192 (Android).
- **Modern format guidance**: ICO was the original required format; PNG is now the modern default for most browsers; SVG is supported by Edge, Firefox, Chrome, and Opera (not Safari/IE) and scales cleanly to any size — making it the future-facing choice for new sites.
- **Mobile home screen icons**: iOS requires `<link rel="apple-touch-icon">` with specified sizes; Android's Chrome uses `<link rel="icon">` with sizes attribute or a Web Manifest JSON file. Without custom icons, devices fall back to a thumbnail of the webpage.
- **Performance**: a missing favicon causes a 404 error on every page load, since all modern browsers request it automatically regardless of bookmarking. Serving a valid favicon eliminates these wasted requests and server log noise.
- **Security note**: favicons appear near browser security indicators (address bar, tab) and have been used in phishing attacks to mimic padlock icons or trusted site icons. Firefox and Chrome mitigate this by placing favicons in tabs while showing security status separately beside the URL.
- **Root directory convention**: placing `favicon.ico` at the site root (e.g. `https://example.com/favicon.ico`) means browsers can find it without any HTML declaration — useful as a fallback, not a replacement for explicit `<link>` tags which allow format and size control.

## Images

- `favicon-in-browser-tab.png` — Wikipedia's favicon displayed in a Firefox browser tab on KDE (2023); illustrates the typical tab-bar context where favicons appear

## Excluded

- Detailed MIME type registration history (IANA, RFC 5988) — standards-body process detail, out of scope
- Per-browser format compatibility tables — implementation detail, out of scope
- Per-browser display-area tables (which browsers show favicons in address bars vs. tabs) — implementation detail
- Animated favicon browser support — edge case, out of scope
- Full HTML syntax variants with all attribute combinations — implementation, out of scope
- Browser selection logic when multiple favicon formats are declared — implementation detail
- Security mechanism specifics (sslstrip, browser tracking via favicon caching) — security implementation, out of scope
