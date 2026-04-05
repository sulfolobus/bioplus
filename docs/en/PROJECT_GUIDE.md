# BioPlus Project Working Guide

## Document Information

| Item | Value |
| --- | --- |
| Project | BioPlus Life Science Practice Platform |
| Repository | [https://github.com/sulfolobus/bioplus](https://github.com/sulfolobus/bioplus) |
| Scope | Chinese + English sites + learning resource expansions |
| Version | 2.0 |
| Updated | 2026-04-05 |

---

## 1. Purpose

This guide standardizes:

1. content creation and updates,
2. bilingual synchronization,
3. navigation/config maintenance,
4. release workflow,
5. quality checks and handover.

---

## 2. Structure Rules

### 2.1 Root-Level Conventions

```text
bioplus/
├── docs/
├── docs/en/
├── overrides/
├── turtle-knowledge-base/
├── .github/workflows/
├── mkdocs.yml
├── mkdocs-en.yml
└── *.py
```

### 2.2 Content Domains

The project uses three top-level content domains:

1. Research Areas
2. Learning Resources
3. Traditional Chinese Medicine

### 2.3 Learning Resources 3-Track Rule

Learning Resources must keep these three entry tracks:

1. High School Biology
2. Biology Olympiad
3. Life Sciences in Higher Education

---

## 3. Naming Rules

### 3.1 Chinese Side

- Directories: natural Chinese names
- Files: Chinese titles (chapter indices allowed)

### 3.2 English Side

- Directories: kebab-case
- Files: kebab-case

### 3.3 Mapping Rule

Every new structured Chinese page must have a clear English mirror and nav entry.

---

## 4. Page Content Rules

### 4.1 Front Matter

Comments are enabled by default globally.
Disable on a page only when needed:

```yaml
---
comments: false
---
```

### 4.2 Heading Hierarchy

- Exactly one `#` title per page
- Main sections: `##`
- Subsections: `###`

### 4.3 Source Quality

- Prefer authoritative sources (textbooks, open courses, official institutions)
- Avoid unverifiable copied material as core evidence

### 4.4 Learning Page Template

Recommended blocks:

1. Subject positioning
2. Chapter/topic checklist
3. Public learning resources
4. Study/training suggestions

---

## 5. Navigation Rules

### 5.1 Mandatory Sync

Any add/rename/delete operation must update both:

1. `mkdocs.yml`
2. `mkdocs-en.yml`

### 5.2 Hierarchy Pattern

- Level 1: semantic groups (Research Areas, Learning Resources)
- Level 2: section overviews
- Level 3+: topic pages

### 5.3 YAML Safety

- Keep indentation consistent
- No mixed tabs/spaces
- Run config checks after modifications

---

## 6. Bilingual Synchronization Rules

### 6.1 Trigger Conditions

Synchronization is required when:

1. adding sections,
2. changing folder hierarchy,
3. updating homepage entry cards,
4. changing navigation structure.

### 6.2 Sync Checklist

1. Chinese pages created
2. English mirror pages created
3. both nav files updated
4. both homepages can reach new pages

### 6.3 Exceptions

If content is intentionally Chinese-only, state scope and reason in the commit note.

---

## 7. Comment System Rules (Giscus)

### 7.1 Config Location

- `mkdocs.yml` -> `extra.giscus`
- `mkdocs-en.yml` -> `extra.giscus`

### 7.2 Injection Template

- `overrides/main.html`

### 7.3 Change Rule

Any repo/category/mapping update must be applied to both configs and validated.

### 7.4 Per-Page Toggle

Use `comments: false` to disable comments on specific pages.

---

## 8. Script and Data Rules

### 8.1 Script Responsibilities

- `extract_turtle_docs.py`: source text extraction
- `fix_references.py`: reference normalization
- `create_en_pages.py`: batch English placeholders for specific flows

### 8.2 Execution Requirements

1. Verify input paths before running scripts
2. Review outputs before publishing
3. Run sampling checks after batch operations

### 8.3 Data Boundary

`turtle-knowledge-base/` is for source and intermediate data, not navigation content.

---

## 9. Local Development Rules

### 9.1 Preview

```bash
cd /Users/wy/Documents/bioplus
source .venv/bin/activate
python3 -m mkdocs serve
```

### 9.2 Build Validation

```bash
python -m mkdocs build -f mkdocs.yml --strict
python -m mkdocs build -f mkdocs-en.yml --strict
```

### 9.3 Acceptance Criteria

1. no build errors,
2. navigation links work,
3. new pages are reachable,
4. comments appear on non-home pages.

### 9.4 Pre-Commit Automatic Check Commands

After every new page generation or content modification, run the following commands in order before commit:

```bash
source .venv/bin/activate
python -m mkdocs build -f mkdocs.yml --strict
python -m mkdocs build -f mkdocs-en.yml --strict
python -m mkdocs serve -f mkdocs.yml -a 127.0.0.1:8000
python -m mkdocs serve -f mkdocs-en.yml -a 127.0.0.1:8001
git status --short
```

Notes:

1. `serve` is used for manual sampling checks of page accessibility and comment rendering. Stop these processes before committing.
2. For non-interactive checks, `serve` can be skipped, but both `build --strict` commands are mandatory.

---

## 10. Release Rules

### 10.1 Standard Flow

```bash
git add -A
git commit -m "docs: update generated pages and synced navigation"
git push origin main
```

### 10.2 Auto Publish

Push to `main` triggers GitHub Actions and deploys automatically.

### 10.3 Post-Release Checks

1. Actions success
2. Chinese homepage/core sections
3. English homepage/core sections
4. new pages/comments rendering

### 10.4 Automatic Commit and Push Rule

1. After every new page generation or content modification, commit and push must be executed automatically after checks pass.
2. Commits should contain only files related to the current task.
3. Commit messages must clearly state change type and scope (for example: docs, nav, config, rules).
4. The default push target is `main`; if the user specifies another branch, follow that instruction.
5. Skipping push is allowed only when the user explicitly requests local-only changes or when remote auth/network fails; in both cases, report the reason and next command.

---

## 11. Quality Checklists

### 11.1 Content Update

- [ ] Chinese pages complete
- [ ] English mirror pages complete
- [ ] terminology consistency checked
- [ ] references traceable

### 11.2 Config Update

- [ ] nav synced in both configs
- [ ] config syntax validated
- [ ] theme override unaffected

### 11.3 Release

- [ ] local build passed
- [ ] remote Actions passed
- [ ] online sampling passed

---

## 12. Handover Rules

### 12.1 Baseline for New Maintainers

Maintainers should be able to independently perform:

1. create pages,
2. update bilingual nav,
3. preview/build locally,
4. push and verify deployment.

### 12.2 Required Files for Handover

1. `docs/PROJECT_DOC.md`
2. `docs/PROJECT_GUIDE.md`
3. `docs/en/PROJECT_DOC.md`
4. `docs/en/PROJECT_GUIDE.md`
5. `mkdocs.yml`
6. `mkdocs-en.yml`
7. `.github/workflows/deploy.yml`

---

## Document Updated

2026-04-05
