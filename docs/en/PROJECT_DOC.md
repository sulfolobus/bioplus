# BioPlus Project Technical Documentation

## Project Status

- Production URL: [https://sulfolobus.github.io/bioplus/](https://sulfolobus.github.io/bioplus/)
- English URL: [https://sulfolobus.github.io/bioplus/en/](https://sulfolobus.github.io/bioplus/en/)
- GitHub Repository: [https://github.com/sulfolobus/bioplus](https://github.com/sulfolobus/bioplus)
- Runtime Status: Live and continuously deployed
- Languages: Chinese + English
- Document Version: 2.0 (aligned with current repository state)
- Last Updated: 2026-04-05

---

## 1. Project Overview

### 1.1 Positioning

BioPlus is a life-science practice platform that combines:

1. research-domain knowledge,
2. disease and application topics,
3. popular science communication,
4. structured learning resources.

### 1.2 Current Information Architecture

The site is organized into three major layers:

1. Research Areas
2. Learning Resources
3. Traditional Chinese Medicine

### 1.3 Learning Resources (Current 3-Track Structure)

The learning section now has three entry tracks:

1. High School Biology
2. Biology Olympiad
3. Life Sciences in Higher Education

---

## 2. Technical Stack and Configuration

### 2.1 Core Stack

- Framework: MkDocs
- Theme: Material for MkDocs
- Build Plugin: mkdocs-minify-plugin
- Hosting: GitHub Pages
- CI/CD: GitHub Actions

### 2.2 Dual-Config Build Model

- Chinese config: `mkdocs.yml`
- English config: `mkdocs-en.yml`

Both sites are built separately and merged into one Pages artifact.

### 2.3 Theme Override and Comment System

- Override directory: `overrides/`
- Override entry file: `overrides/main.html`
- Comment system: Giscus (GitHub Discussions)

Current Giscus keys:

- repo: `sulfolobus/bioplus`
- repo_id: `R_kgDORhh8mw`
- category: `Ideas`
- category_id: `DIC_kwDORhh8m84C6FeG`
- mapping: `pathname`

Behavior:

1. Comments are auto-injected on all non-home pages.
2. Any page can opt out via front matter `comments: false`.
3. Future pages inherit comments automatically.

---

## 3. Deployment and Release

### 3.1 Trigger

- Event: push to `main`
- Workflow file: `.github/workflows/deploy.yml`

### 3.2 Workflow Steps

1. Checkout repository
2. Setup Python 3.11
3. Install MkDocs dependencies
4. Build Chinese site (`mkdocs.yml`) -> `site_zh`
5. Build English site (`mkdocs-en.yml`) -> `site_en`
6. Merge both outputs into `site/`
7. Upload Pages artifact
8. Deploy to GitHub Pages

### 3.3 Typical Release Time

Deployment usually completes in 1-2 minutes after push.

---

## 4. Current Repository Structure

### 4.1 Root

```text
bioplus/
├── .github/workflows/deploy.yml
├── .venv/
├── docs/
├── overrides/
├── site/
├── turtle-knowledge-base/
├── create_en_pages.py
├── extract_turtle_docs.py
├── fix_references.py
├── mkdocs.yml
└── mkdocs-en.yml
```

### 4.2 Chinese Content Root (`docs/`)

Key modules include:

- foundation pages (`index.md`, `about.md`, docs)
- static assets and hooks
- research modules (8 areas)
- learning resources (3 tracks)
- traditional Chinese medicine module

### 4.3 English Content Root (`docs/en/`)

English mirrors Chinese structure with mapped directories:

- research areas (8 mirrored modules)
- learning resources (3 mirrored tracks)
- traditional Chinese medicine module

---

## 5. Navigation and Content Status

### 5.1 Chinese Navigation (`mkdocs.yml`)

Includes:

1. Home, About, technical docs, project guide
2. Research Areas with nested topic pages
3. Research Groups, Achievements, Popular Science
4. Learning Resources (3 tracks)
5. Traditional Chinese Medicine

### 5.2 English Navigation (`mkdocs-en.yml`)

Maintains a mirrored structure:

1. Home, About, project docs, project guide
2. Research Areas
3. Research Groups, Achievements, Popular Science
4. Learning Resources
5. Traditional Chinese Medicine

### 5.3 Learning Resources Detail

#### High School Biology

- textbook-volume structure
- chapter-level pages under each volume

#### Biology Olympiad

- subject-based organization
- includes cell biology, genetics, biochemistry, physiology, ecology, evolution, methods, and data analysis

#### Life Sciences in Higher Education

- organized from macro to micro
- includes introduction, evolution, ecology, physiology, neurobiology, developmental biology, cell biology, microbiology, genetics, molecular biology, biochemistry, structural biology, bioinformatics, computational biology, synthetic biology

---

## 6. Content Scripts and Data Helpers

### 6.1 `create_en_pages.py`

Batch helper for creating English placeholder pages in specific workflows.

### 6.2 `extract_turtle_docs.py`

Extracts source text from PDF/Word/Excel materials into `turtle-knowledge-base/`.

### 6.3 `fix_references.py`

Batch-normalizes references (mainly for turtle-disease content).

### 6.4 `turtle-knowledge-base/`

Stores extracted material and intermediate data only; not published as site navigation content.

---

## 7. Local Development

### 7.1 Requirements

- Python 3.9+
- MkDocs
- mkdocs-material
- mkdocs-minify-plugin

### 7.2 Local Preview

```bash
cd /Users/wy/Documents/bioplus
source .venv/bin/activate
python3 -m mkdocs serve
```

Default local URL: `http://127.0.0.1:8000/`

### 7.3 Build Commands

```bash
# Chinese
mkdocs build -f mkdocs.yml

# English
mkdocs build -f mkdocs-en.yml
```

---

## 8. Maintenance Principles

### 8.1 Bilingual Sync

When Chinese structure changes, update English mirrors together:

1. directories,
2. pages,
3. navigation,
4. homepage entries.

### 8.2 Config Consistency

Keep `mkdocs.yml` and `mkdocs-en.yml` aligned on:

- theme features,
- plugins,
- comment settings,
- analytics placeholders,
- language switch config.

### 8.3 Comment System Maintenance

Keep Giscus parameters in `extra.giscus`; avoid page-level hardcoded scripts.

---

## 9. Known Risks

1. Large nav trees are sensitive to YAML indentation issues.
2. Chinese/English naming conventions differ (natural language vs kebab-case); path mismatch can break pages.
3. Batch page creation should always be followed by local build checks.
4. Documentation must be updated regularly to avoid drift from live structure.

---

## 10. Recommended Next Improvements

1. Keep project docs and guide updated for every major structural change.
2. Add periodic nav-directory-doc consistency checks.
3. Fill real Google Analytics property when available.
4. Maintain a reusable page template for learning-resource modules.

---

## 11. Related Files

- Chinese technical doc: `docs/PROJECT_DOC.md`
- Chinese project guide: `docs/PROJECT_GUIDE.md`
- English technical doc: `docs/en/PROJECT_DOC.md`
- English project guide: `docs/en/PROJECT_GUIDE.md`
- Chinese config: `mkdocs.yml`
- English config: `mkdocs-en.yml`
- Theme override: `overrides/main.html`
- Deployment workflow: `.github/workflows/deploy.yml`

---

## Document Updated

2026-04-05
