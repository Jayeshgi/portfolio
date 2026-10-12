# Project research: library system and ethical UI auditor

Reviewed on 11 October 2026 using public GitHub pages and raw source files. This is a read-only source review; neither project was executed. Descriptions below distinguish implemented code from verified runtime behavior. No adoption, accuracy, performance, or employment claims are inferred.

## AI-Based-Library-Management

Repository: [Jayeshgi/AI-Based-Library-Management](https://github.com/Jayeshgi/AI-Based-Library-Management)

### Suggested portfolio description

An academic library platform that combines catalog and borrowing workflows with a conversational book assistant and analytics views. The implementation connects a React interface to a FastAPI backend and uses sentence embeddings to rank book recommendations. [Library API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/library.py), [recommendation engine](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/recommend.py), [frontend manifest](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/frontend/package.json)

Suggested concise title: **AI Library Assistant**. Suggested category: **NLP / full-stack academic project**. The README identifies the project with a Semester VI NLP course at Pillai College of Engineering. [README](https://github.com/Jayeshgi/AI-Based-Library-Management#readme)

### Verified stack

| Layer | Evidence-backed technologies |
| --- | --- |
| Interface | React 18, TypeScript, Vite, Tailwind CSS, Recharts, Firebase client dependency |
| API and data | Python, FastAPI, SQLAlchemy, Pandas, NumPy |
| AI and retrieval | Google Gen AI SDK, Sentence Transformers, scikit-learn cosine similarity |
| Database configuration | SQLite in the local demo environment example; MySQL/PyMySQL fallback in database configuration |

Sources: [frontend manifest](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/frontend/package.json), [Python requirements](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/requirements.txt), [database configuration](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/core/database.py), [environment example](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/.env.example).

### Capabilities evidenced in source

- Catalog browsing, stock-aware borrowing, individual loan history, reviews, and admin inventory operations appear in the library API. These are implemented endpoints, not a claim that every workflow was exercised. [Library API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/library.py)
- The agent loads department-specific catalog entries and caches `all-MiniLM-L6-v2` embeddings. Gemini interprets user intent and dispatches requests to recommendation, summary, review, borrowing/return, and location handlers. [Chatbot agent](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/agent.py)
- Recommendations combine query expansion, cosine similarity, a small copy-count weighting, and an exact-match bonus. This supports a semantic recommendation claim; it does not establish measured retrieval quality. [Recommendation engine](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/recommend.py)
- Chat endpoints maintain conversation state in an in-memory session dictionary and pass a database session to the agent. [Chat API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/chatbot.py)
- Analytics code prepares borrowing timelines, department aggregates, and chart payloads. It mixes dataset-derived and fixed demonstration values. [Analytics API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/analytics.py)

### Case-study draft

**Problem:** Help students discover relevant books and connect that discovery to library tasks. This is an interpretation of the implemented workflows, rather than evidence of a conducted user study. [Library API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/library.py)

**Approach:** Pair a conventional catalog API with a conversational interface. Use Gemini for intent routing and local sentence embeddings for ranked recommendations, while keeping catalog data in a relational database. [Chatbot agent](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/agent.py), [database configuration](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/core/database.py)

**Result:** A repository containing an integrated academic prototype, with the application mounting authentication, library, analytics, chatbot, prediction, and socket routers. A measured outcome or successful public deployment has not been established by this review. [Application entry point](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/main.py)

### Limits on public claims

- Do not convert the README's dataset counts into active-user or customer adoption claims. The repository includes a demo seeding script that creates student records from CSV files. [Demo seeding](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/seed_database.py)
- Use **analytics dashboard** rather than **fully live analytics**. The reviewed analytics path includes fixed search rankings, a fixed currently-borrowed value, and chart values substituted for display. [Analytics API](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/api/analytics.py)
- Avoid claiming production readiness, search accuracy gains, or a validated HyDE implementation. The inspected retrieval code demonstrates query expansion and embedding similarity; it has no accompanying benchmark in the reviewed files. [Recommendation engine](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/recommend.py)
- AI behavior depends on configuration and external model access. The agent requires a Gemini key and uses a hard-coded model identifier; API availability was not tested. Its embedding cache checks file existence rather than catalog-change freshness. [Chatbot agent](https://raw.githubusercontent.com/Jayeshgi/AI-Based-Library-Management/main/backend/app/chatbot/agent.py)
- A portfolio can link the code now; a working demo, screenshots, actual project dates, and a tested walkthrough would strengthen the case study.

### Attribution

The user reports doing nearly all implementation work. Preserve that as a user-reported primary contribution, while retaining the academic team-project context. The README lists Jayesh Sonar among 13 team members and retains an installation reference to another team repository. This does not determine each person's contribution. Avoid “sole author” or assigning specific modules to Jayesh without confirmation. Suggested draft role: **Primary implementation contributor · academic team project**. [README](https://github.com/Jayeshgi/AI-Based-Library-Management#readme)

## ethical-ui-auditor

Repository: [Jayeshgi/ethical-ui-auditor](https://github.com/Jayeshgi/ethical-ui-auditor)

The user made this repository public during the review. Its raw README and implementation files were then readable; earlier 404 results are superseded by this inspection. The project was not executed.

### Suggested portfolio description

A multimodal research prototype that combines browser capture, NLP, and visual cues to help review potentially manipulative interface patterns. It assembles text and screenshot evidence and provides scan history, comparisons, and human review workflows. [Scan pipeline](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/scans/service.py), [scan API](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/api/routes.py)

Suggested title: **Ethical UI Auditor**. Suggested category: **NLP / computer vision / research prototype**. The README explicitly frames it as a developer-facing proof of concept rather than a compliance tool. [README](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/README.md?refresh=20261011)

### Verified stack

| Layer | Evidence-backed technologies |
| --- | --- |
| Backend | Python, FastAPI, Pydantic |
| Browser and image processing | Playwright, Tesseract OCR via pytesseract, OpenCV, Pillow |
| ML | PyTorch, Hugging Face Transformers/BERT, Ultralytics YOLO |
| Persistence | PostgreSQL, SQLAlchemy, Alembic |
| Workspace UI | HTML/CSS/JavaScript served by FastAPI; do not label it a React application |

Sources: [requirements](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/requirements.txt), [application entry point](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/main.py), [BERT classifier](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/text_analysis/model.py), [workspace UI](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/flow_analysis/ui.py), [database models](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/database.py).

### Capabilities evidenced in source

- Captures pages, combines DOM text with OCR blocks, runs the text classifier, attaches optional visual detections, and joins evidence to frontend-behavior findings. Individual findings retain model confidence, thresholds, version, and location information. [Scan pipeline](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/scans/service.py)
- Supports authenticated asynchronous scan creation, polling, history, completed-scan comparisons, and reviewer decisions on evidence. [Scan API](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/api/routes.py)
- Exposes autonomous-flow runs, state graphs, finding reviews, regression comparisons, screenshots, and PDF report downloads through API routes. [Autonomous-flow API](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/flow_analysis/autonomous_routes.py)
- Persists job metadata, results, goals, graph nodes, and graph edges. Browser workers are scheduled asynchronously with bounded concurrency; credentials are kept in worker memory and omitted from stored request summaries. [Autonomous job manager](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/flow_analysis/autonomous_jobs.py)

### Case-study draft

**Problem:** Potentially manipulative interface behavior can span wording, appearance, and multi-step journeys. Bringing those signals together can make a developer's review more traceable. This problem statement is inferred from the implemented pipeline, not from a verified user study. [Scan pipeline](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/scans/service.py)

**Approach:** Capture browser evidence, classify text with a trained BERT artifact, attach visual cues, and preserve findings for review and comparison. Extend the workflow with journey-state graphs and report export. [BERT classifier](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/text_analysis/model.py), [autonomous-flow API](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/flow_analysis/autonomous_routes.py)

**Result:** A research prototype with implemented scan, review, history, flow-analysis, and PDF-report routes. A successful live run and independently reproduced model evaluation have not been established by this source review. [Application entry point](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/main.py), [scan API](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/api/routes.py)

### Limits on public claims

- Keep **research prototype** visible. The README identifies the present text evaluation as synthetic-assisted and the visual experiment as research-only, with a small test set and machine-proposed additional labels. Do not describe it as compliance-grade or as proving that a website is unethical. [README](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/README.md?refresh=20261011)
- Model artifacts are required. The classifier refuses to load without metadata and thresholds; the service does not silently replace missing model predictions with keyword rules. [BERT classifier](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/text_analysis/model.py)
- Visual analysis is optional in the scan pipeline and reports warnings when unavailable. A repository link alone is not evidence that trained weights or a running demo are available to visitors. [Scan pipeline](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/backend/app/scans/service.py)
- The README's detection metrics have not been independently reproduced here. Omit percentages from the portfolio until the exact evaluation artifacts, dataset provenance, and intended wording are reviewed. [README](https://raw.githubusercontent.com/Jayeshgi/ethical-ui-auditor/main/README.md?refresh=20261011)

### Attribution

The user reports primary implementation contribution across the four supplied projects. Specific ownership of training, datasets, browser automation, backend, and UI has not been independently established. Use **Primary implementation contributor** as user-reported context; do not infer sole authorship or ownership of third-party datasets. Actual project dates, a sample report, screenshots, and an account of the user's most challenging implementation decision remain useful additions.
