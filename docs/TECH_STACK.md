# Required tech stack

Updated for the visual redesign on 11 October 2026. This supersedes the original vanilla JavaScript implementation.

| Layer | Installed choice | Purpose |
| --- | --- | --- |
| UI | React 19 + TypeScript | Reusable sections, typed project stories, interaction state |
| Development/build | Vite 8 + React plugin | Local development and static production output |
| Styling | Tailwind CSS 4 + custom CSS | Design tokens, editorial compositions, responsive rules |
| Motion | Framer Motion 14 | One-time section entrances, hero reveal and pointer response, journey transitions |
| 3D badge | Three.js, loaded near the About section | Flexible strap physics, draggable card, two-sided identity artwork |
| Icons | Lucide React | Consistent arrows, navigation and interface details |
| Typography | Barlow Condensed + Space Grotesk | Condensed display hierarchy and geometric body text |
| Content | src/content.ts + src/profile.ts | Editable project and profile information |
| Assets | public/ | Local images, favicon, supplied resume |
| Runtime services | None | Static site; contact uses mailto and social links |

Exact installed versions are locked in package-lock.json. Use npm ci for repeatable installation, or npm install after intentionally changing package.json. Node.js 22 or newer is required.

## Commands

| Command | Result |
| --- | --- |
| npm run dev | Current application at http://127.0.0.1:4174 |
| npm run check | Strict TypeScript source checking |
| npm run build | TypeScript check and optimized Vite output in dist/ |
| npm run preview | Production output at http://127.0.0.1:4175 |

Only dist/ belongs on the static host. There is no server runtime or database to deploy. The prior site/ and scripts/ directories remain for reference but are not used by these commands.

## Implementation decisions

Native dialog supplies modal semantics and focus management; Escape and focus restoration were browser tested. Native anchors and range controls preserve keyboard behavior. Decorative mockups are hidden from assistive technology; each project has a labeled case-study button and text description.

Motion respects prefers-reduced-motion. Pointer parallax and the small hover label run only for fine pointers; the normal browser cursor remains available. There is no automatic marquee, forced scrolling, or background video download. The optional About badge uses WebGL; its artwork remains visible when WebGL is unavailable. Motion defaults on unless reduced motion is requested, with explicit Animate/Pause and keyboard Flip controls. Rendering pauses offscreen and in hidden tabs.

Google Fonts are loaded through index.html with display=swap and system fallbacks. Images are served locally; below-the-fold photos are lazy-loaded. The transparent portrait PNG (about 1.93 MB) is prioritized in the hero. Four retained personal JPEGs total about 586 KB. Scroll-driven portrait tilt and local letter stretching reuse Framer Motion; ambient drift uses a pausable CSS transform animation. Reduced motion uses a static opening, including when the preference changes while the page is open. These optimizations do not imply a measured Lighthouse score.

Browser verification evidence and limitations are in DESIGN_REVIEW.md. AI/ML libraries mentioned in project stories describe those projects and are not dependencies of the portfolio itself.
