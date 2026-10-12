# Jayesh Sonar ? engineering portfolio

An editorial portfolio for AI/ML and software internships and full-time roles. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide. The current design pairs dark glass surfaces with Jayesh's photographs: a transparent foreground portrait with scroll-driven perspective rotation, elastic hover typography, a drifting meditation landscape, photographic project compositions, and a four-year engineering timeline.

## Run locally

Use Node.js 22 or newer. From this folder:

```powershell
npm install
npm run dev
```

Open **http://127.0.0.1:4174**. Stop with Ctrl+C. If PowerShell blocks npm.ps1, use npm.cmd instead. Dependencies are already installed in this workspace. An older preview on port 4173 serves the previous static version; the current application uses 4174.

```powershell
npm run check
npm run build
npm run preview
```

The production preview runs at **http://127.0.0.1:4175**. Deploy only the generated dist directory to a static host. This version is local and has not been published.

## Edit the portfolio

| File | What to change |
| --- | --- |
| src/content.ts | Featured projects, experiments, project storytelling, external links |
| src/profile.ts | Profile, education, journey, internship, skills, courses, original source-backed descriptions |
| src/App.tsx | Navigation, sections, case study dialog, filters, journey, interactive signal field |
| src/components/CinematicHero.tsx | Personal introduction, cutout rotation, letter stretching, and background pause control |
| src/cinematic.css | Cinematic art direction and desktop/mobile layouts |
| src/graphify-out/ | Graphify source map: interactive graph, JSON, and report |
| src/Visuals.tsx | Custom project mockups and visual compositions |
| src/styles.css | Design tokens, typography, layout, responsive behavior |
| public/images/ | Artwork and editorial photographs |
| public/resume.pdf | Original supplied resume, copied unchanged |
| index.html | Title, metadata, fonts, preview indexing restriction |

The old site/ and scripts/ directories are retained as the previous implementation. They are no longer the npm development or build entry points. The reference video and reference/ images are local design evidence and are excluded from the production build.

## Included

- Five featured project stories: AI Healthcare Assistant, Ocean Hazard Reporting, Study Sync, AI Library Assistant, and Ethical UI Auditor.
- FruitLens and Typo Corrector in the experiments section; seven working case study dialogs overall.
- AI/ML and software filters, mobile navigation, keyboard support, reduced motion, scroll-linked visual motion, and selectable engineering years.
- About, resume download, Bio-verse internship, skills, courses, GitHub, LinkedIn, LeetCode, and the supplied Gmail contact.

Project visuals are identified as illustrative concepts. They are not claimed to be screenshots of the applications. Study Sync is based on the newly supplied brief; its implementation has not been independently reviewed. Team attribution for the library project is preserved.

## Review and launch

The full rendered page was reviewed on desktop and mobile. Browser checks cover seven dialog/focus flows, filters, navigation, scroll-linked motion, keyboard signal control, resume delivery, and no overflow at 320, 390, 768, 1024, 1440, and 1920 pixels. Build and TypeScript checks are required after edits. This does not constitute an exhaustive accessibility or cross-browser audit.

See [design review](docs/DESIGN_REVIEW.md), [tech stack](docs/TECH_STACK.md), [build plan](docs/BUILD_PLAN.md), [asset credits](docs/ASSET_CREDITS.md), and [plugins/services](docs/PLUGINS_AND_SERVICES.md).

Remaining personal inputs: actual project screenshots and demo URLs where available, and a corrected resume email. Personal photographs were supplied and integrated on 12 October 2026. The website uses er.jayeshsonar@gmail.com; the unchanged PDF contains a different address. See [content status](docs/CONTENT_STATUS.md) and [resume notes](docs/RESUME_NOTES.md).

Before public launch, review factual copy, choose the final domain, add the canonical/share metadata, and remove the noindex restriction in index.html. Fonts currently load from Google Fonts with system fallbacks. No database, API key, or paid plugin is required.
