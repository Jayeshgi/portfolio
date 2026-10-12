# Graph Report - src  (2026-10-12)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 43 nodes · 88 edges · 12 communities (5 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App.tsx
- content.ts
- CinematicHero.tsx
- tilted-grid-hero.tsx
- IndexLabel
- Experiments
- Reveal
- Visuals.tsx
- fromOriginal
- profile.ts

## God Nodes (most connected - your core abstractions)
1. `App()` - 12 edges
2. `IndexLabel()` - 6 edges
3. `Experiments()` - 6 edges
4. `Reveal()` - 6 edges
5. `Contact()` - 5 edges
6. `Work()` - 5 edges
7. `CinematicHero()` - 4 edges
8. `About()` - 4 edges
9. `ProjectVisual()` - 4 edges
10. `ProjectShowcase()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `CinematicHero()`  [EXTRACTED]
  App.tsx → components/CinematicHero.tsx
- `App()` --calls--> `TiltedGridHero()`  [EXTRACTED]
  App.tsx → components/ui/tilted-grid-hero.tsx
- `ProjectShowcase()` --calls--> `ProjectVisual()`  [EXTRACTED]
  App.tsx → Visuals.tsx
- `Experiments()` --calls--> `ProjectVisual()`  [EXTRACTED]
  App.tsx → Visuals.tsx

## Import Cycles
- None detected.

## Communities (12 total, 7 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.46
Nodes (7): App(), CaseStudy(), Contact(), Cursor(), ease, ExternalLink(), Navbar()

### Community 1 - "content.ts"
Cohesion: 0.33
Nodes (5): allProjects, experiments, links, profile, projects

### Community 5 - "IndexLabel"
Cohesion: 0.67
Nodes (3): About(), IndexLabel(), Journey()

### Community 6 - "Experiments"
Cohesion: 0.67
Nodes (3): Experiments(), SignalPlayground(), ProjectVisual()

### Community 7 - "Reveal"
Cohesion: 1.00
Nodes (3): ProjectShowcase(), Reveal(), Work()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `App()` connect `App.tsx` to `main.tsx`, `CinematicHero.tsx`, `tilted-grid-hero.tsx`, `IndexLabel`, `Experiments`, `Reveal`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `CinematicHero()` connect `CinematicHero.tsx` to `App.tsx`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `Experiments()` connect `Experiments` to `App.tsx`, `IndexLabel`, `Reveal`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._