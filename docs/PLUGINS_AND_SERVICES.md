# Plugins, tools, and services

No paid plugin, API key, or connected account is required to run this portfolio.

## Required locally

- Node.js 22 or newer and npm.
- Project dependencies in package.json: React, TypeScript, Vite, Tailwind, Framer Motion, and Lucide, installed with npm install.
- A modern browser. The current development URL is http://127.0.0.1:4174.

Google Fonts supplies Barlow Condensed and Space Grotesk; these are external font requests with system fallbacks. Photographs and the generated chrome artwork are stored locally in public/images/.

## Capabilities used in this redesign

The Sites skill guided local website implementation and browser review. The imagegen skill produced the original abstract chrome hero sculpture. Neither introduces a paid runtime service into the website. Custom project visuals are ordinary HTML/CSS, not a 3D plugin or embedded design service.

GitHub account integration is optional for private repository access, commits, or a future pull request. The public source reviews were sufficient for current content. No GitHub account connection, Figma connection, hosting purchase, or domain registration was made.

## Optional later

| Tool or service | Add it when |
| --- | --- |
| Static hosting and a domain | You want a public portfolio URL |
| Git | You want version history and a repository workflow |
| CMS | You want to edit content without source files |
| Contact-form backend | You prefer a submitted form instead of email/social links |
| Analytics | You have chosen what visitor data to measure |

No database, authentication, cloud ML inference, or email API is needed for the current functionality. Use docs/TECH_STACK.md for installed technologies and docs/CONTENT_STATUS.md for the personal material still useful to supply.

## Local Codex development tools

Ponytail 5.1.0 is installed as a Codex plugin from the author's marketplace.
It provides code review and lean implementation skills. The Codex desktop app
may need a restart before showing the plugin, and its lifecycle hooks require
review and trust in the Codex `/hooks` interface.

Graphify 0.9.86 is installed in `.local/graphify-venv/` for this workspace.
Its project skill lives at `.agents/skills/graphify/SKILL.md`; use
`.local\graphify-venv\Scripts\graphify.exe` in PowerShell to build or query a
local code knowledge graph. The optional always-on Codex hook was omitted so
Graphify does not intercept normal tool calls. No graph has been generated yet.

OmniRoute was researched but not configured. It is an external AI gateway and
cloud-agent orchestration service that needs a running server and provider
accounts or credentials. Codex already has native agent coordination for tasks
where it is appropriate, so OmniRoute is not required for this portfolio.
