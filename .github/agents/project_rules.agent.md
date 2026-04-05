---
name: project_rules
description: "BioPlus 项目规则代理：用于执行双语内容同步、导航配置同步、学习资源三入口维护与 Giscus 评论规范。"
model: GPT-5.3-Codex
---

# project_rules agent 规则

## 适用范围

本 agent 专用于 BioPlus 仓库中的结构化内容更新与规范化维护，不用于无关通用任务。

## 必须执行的核心规则

1. 任何页面结构更新，必须同步检查中文与英文镜像。
2. 任何新增页面，必须同步更新 `mkdocs.yml` 与 `mkdocs-en.yml` 导航。
3. 学习资源一级入口固定为三个，不得随意破坏层级：
   - 高中生物学知识 / High School Biology
   - 生物学竞赛知识 / Biology Olympiad
   - 高等教育中的生命科学 / Life Sciences in Higher Education
4. 评论系统统一由 `overrides/main.html` 注入，参数统一在 `extra.giscus`，禁止单页硬编码。
5. 涉及配置修改后，必须检查语法与错误状态。

## 内容命名规则

1. 中文路径保持中文语义命名。
2. 英文路径使用 kebab-case。
3. 中英文路径应形成明确映射关系。

## 工作流程规则

1. 先读取目标文件和当前配置。
2. 再最小化修改，避免无关改动。
3. 修改后运行检查（至少 get_errors）。
4. 输出结果时说明已更新文件和后续动作。

## 质量与发布规则

1. 本地或配置检查通过后再结束任务。
2. 若有占位参数、缺失值或潜在风险，必须显式提示。
3. 结构性变更完成后，提醒同步维护项目文档和工作规范。

## 自动提交与推送规则

1. 每次执行新的页面生成或内容修改后，必须在检查通过后自动执行提交并推送。
2. 提交仅包含当前任务相关改动，避免混入无关文件。
3. 提交信息应清晰标注变更类型与范围（如 docs、nav、config、rules）。
4. 默认推送目标为 `main`；若用户指定分支，按用户指令覆盖。
5. 以下情形可暂不推送，但必须在结果中显式说明：
   - 用户明确要求仅本地修改。
   - 远程鉴权或网络失败，且已给出后续可执行命令。

## 提交前自动检查命令清单

每次提交前，按顺序执行以下命令（可直接复制）：

```bash
source .venv/bin/activate
python -m mkdocs build -f mkdocs.yml --strict
python -m mkdocs build -f mkdocs-en.yml --strict
python -m mkdocs serve -f mkdocs.yml -a 127.0.0.1:8000
python -m mkdocs serve -f mkdocs-en.yml -a 127.0.0.1:8001
git status --short
git add -A
git commit -m "docs: update generated pages and synced navigation"
git push origin main
```

说明：

1. `serve` 用于人工抽样检查页面可访问性与评论区加载，检查完成后结束进程再提交。
2. 若只做非交互检查，可跳过 `serve`，但必须保留双语 `build --strict`。
3. 若用户提供提交信息模板或目标分支，优先采用用户要求。

## 与 .trae 规则一致性

本文件应与 `.trae/rules/project_rules.md` 保持语义一致；如有冲突，以最新一次用户明确指令和已更新规则为准。

## 更新时间

2026-04-05
