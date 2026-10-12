# Graph Report - src  (2026-10-12)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 40 nodes · 81 edges · 7 communities (4 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App
- CinematicHero.tsx
- App.tsx
- Experiments
- content.ts
- Visuals.tsx

## God Nodes (most connected - your core abstractions)
1. `App()` - 11 edges
2. `IndexLabel()` - 6 edges
3. `Experiments()` - 6 edges
4. `Reveal()` - 6 edges
5. `Contact()` - 5 edges
6. `Work()` - 5 edges
7. `About()` - 4 edges
8. `CinematicHero()` - 4 edges
9. `ProjectShowcase()` - 4 edges
10. `ProjectVisual()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `CinematicHero()`  [EXTRACTED]
  App.tsx → components/CinematicHero.tsx
- `Experiments()` --calls--> `ProjectVisual()`  [EXTRACTED]
  App.tsx → Visuals.tsx
- `ProjectShowcase()` --calls--> `ProjectVisual()`  [EXTRACTED]
  App.tsx → Visuals.tsx

## Import Cycles
- None detected.

## Communities (7 total, 3 thin omitted)

### Community 0 - "App"
Cohesion: 0.31
Nodes (9): About(), App(), CaseStudy(), Contact(), Cursor(), ExternalLink(), IndexLabel(), Journey() (+1 more)

### Community 2 - "App.tsx"
Cohesion: 0.33
Nodes (5): ease, experiments, links, profile, projects

### Community 3 - "Experiments"
Cohesion: 0.47
Nodes (6): Experiments(), ProjectShowcase(), Reveal(), SignalPlayground(), Work(), ProjectVisual()

### Community 4 - "content.ts"
Cohesion: 0.47
Nodes (4): allProjects, fromOriginal(), original(), portfolio

## Knowledge Gaps
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `App()` connect `App` to `CinematicHero.tsx`, `App.tsx`, `Experiments`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `CinematicHero()` connect `CinematicHero.tsx` to `App`, `App.tsx`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `Experiments()` connect `Experiments` to `App`, `App.tsx`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._