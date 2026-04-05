# BioPlus 项目技术文档

## 项目状态

- 线上地址: [https://sulfolobus.github.io/bioplus/](https://sulfolobus.github.io/bioplus/)
- 英文地址: [https://sulfolobus.github.io/bioplus/en/](https://sulfolobus.github.io/bioplus/en/)
- GitHub 仓库: [https://github.com/sulfolobus/bioplus](https://github.com/sulfolobus/bioplus)
- 运行状态: 已上线、自动化部署正常
- 站点语言: 中文 + English
- 文档版本: 2.0（基于当前目录与导航实况）
- 最近更新: 2026-04-05

---

## 一、项目概述

### 1.1 项目定位

BioPlus 是一个生命科学实践应用平台，覆盖科研应用、疾病专题、科普内容与分层学习资源。

### 1.2 当前信息架构

当前站点已形成三层结构：

1. 研究领域（Research Areas）
2. 学习资源（Learning Resources）
3. 传统中医/中医经典（Traditional Chinese Medicine）

### 1.3 当前学习资源体系（新增后）

学习资源已扩展为 3 个专题入口：

1. 高中生物学知识（教材分册 + 章节）
2. 生物学竞赛知识（按学科）
3. 高等教育中的生命科学（按宏观到微观学科路径）

---

## 二、技术架构与配置

### 2.1 核心技术栈

- 文档框架: MkDocs
- 主题: Material for MkDocs
- 构建插件: mkdocs-minify-plugin
- 托管: GitHub Pages
- CI/CD: GitHub Actions

### 2.2 双配置构建模型

- 中文配置: `mkdocs.yml`
- 英文配置: `mkdocs-en.yml`

双配置分别构建，再合并为同一 Pages 产物目录。

### 2.3 主题覆写与评论系统

- 主题覆写目录: `overrides/`
- 覆写文件: `overrides/main.html`
- 评论系统: Giscus（GitHub Discussions）

当前 Giscus 关键参数：

- repo: `sulfolobus/bioplus`
- repo_id: `R_kgDORhh8mw`
- category: `Ideas`
- category_id: `DIC_kwDORhh8m84C6FeG`
- mapping: `pathname`

实现方式：

1. 通过 `overrides/main.html` 在所有非首页页面自动注入评论区。
2. 页面可通过 Front Matter 设置 `comments: false` 禁用评论区。
3. 新增页面默认自动继承评论区逻辑。

---

## 三、部署与发布流程

### 3.1 自动部署触发

- 触发条件: push 到 `main`
- 工作流文件: `.github/workflows/deploy.yml`

### 3.2 工作流步骤

1. Checkout
2. Setup Python 3.11
3. 安装 MkDocs 依赖
4. 构建中文站点（输出临时 `site_zh`）
5. 构建英文站点（输出临时 `site_en`）
6. 合并产物到 `site/`
7. Upload Pages artifact
8. Deploy to GitHub Pages

### 3.3 发布时效

通常推送后 1-2 分钟可完成上线。

---

## 四、当前目录结构（实况）

### 4.1 仓库根目录

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

### 4.2 中文内容根目录（`docs/`）

关键目录与文件：

- `index.md`、`about.md`
- `PROJECT_DOC.md`、`PROJECT_GUIDE.md`
- `assets/`、`hooks/`、`robots.txt`
- `research-groups/`、`achievements/`
- `科普文章/`
- 研究领域专题:
  - `基因编辑应用/`
  - `医学诊断/`
  - `药物研发/`
  - `生物技术/`
  - `神经退化疾病/`
  - `心血管疾病/`
  - `感官功能障碍/`
  - `龟病防治/`
- 学习资源专题:
  - `高中生物学知识/`
  - `生物学竞赛知识/`
  - `高等教育生命科学/`
- `中医经典/`

### 4.3 英文内容根目录（`docs/en/`）

关键目录与文件：

- `index.md`、`about.md`
- `PROJECT_DOC.md`、`PROJECT_GUIDE.md`
- `research-groups/`、`achievements/`
- `popular-science/`
- 研究领域专题:
  - `gene-editing/`
  - `medical-diagnosis/`
  - `drug-development/`
  - `biotechnology/`
  - `neurodegenerative-diseases/`
  - `cardiovascular-diseases/`
  - `sensory-dysfunction/`
  - `turtle-disease/`
- 学习资源专题:
  - `high-school-biology/`
  - `biology-competition/`
  - `higher-education-life-sciences/`
- `traditional-chinese-medicine/`

---

## 五、导航与内容模块现状

### 5.1 中文主导航（`mkdocs.yml`）

当前已包含：

1. 首页、关于我们、项目文档、工作规范
2. 研究领域（8 大板块 + 细分子页）
3. 研究组、成果转化、科普文章
4. 学习资源（3 大专题）
5. 中医经典

### 5.2 英文主导航（`mkdocs-en.yml`）

当前与中文保持结构镜像，包含：

1. Home、About、Project Documentation、Project Guide
2. Research Areas（8 大板块镜像）
3. Research Groups、Achievements、Popular Science
4. Learning Resources（3 大专题镜像）
5. Traditional Chinese Medicine

### 5.3 学习资源模块细节

#### 高中生物学知识

- 分册组织：必修一/二/三，选修一/二/三
- 每册下含章节页
- 中英文均已配置导航

#### 生物学竞赛知识

- 按学科组织
- 已包括细胞、分子遗传、生物化学、动植物生理、生态、进化分类、实验方法、数据分析等
- 中英文均已配置导航

#### 高等教育中的生命科学（新增）

- 按“宏观 -> 微观”路径组织
- 覆盖导论、进化、生态、生理、神经、发育、细胞、微生物、遗传、分子、生化、结构、生信、计算、合成
- 中英文镜像目录已接入

---

## 六、内容生产与辅助脚本

### 6.1 `create_en_pages.py`

用途：批量创建部分英文页面占位与翻译骨架（最初用于龟病相关）。

### 6.2 `extract_turtle_docs.py`

用途：从本地资料库提取 PDF/Word/Excel 文本，输出到 `turtle-knowledge-base/`。

### 6.3 `fix_references.py`

用途：批量修正规范化引用格式（主要针对龟病板块）。

### 6.4 `turtle-knowledge-base/`

用途：存放龟病板块的提取文本和中间资料，不直接作为站点页面发布。

---

## 七、本地开发与预览

### 7.1 环境要求

- Python 3.9+
- MkDocs
- mkdocs-material
- mkdocs-minify-plugin

### 7.2 本地预览命令

```bash
cd /Users/wy/Documents/bioplus
source .venv/bin/activate
python3 -m mkdocs serve
```

默认访问：`http://127.0.0.1:8000/`

### 7.3 单独构建命令

```bash
# 中文
mkdocs build -f mkdocs.yml

# 英文
mkdocs build -f mkdocs-en.yml
```

---

## 八、运行与维护要点

### 8.1 双语同步原则

凡中文新增栏目或结构变动，应在英文镜像目录同步更新：

1. 目录
2. 页面
3. 导航
4. 首页入口

### 8.2 配置一致性原则

`mkdocs.yml` 与 `mkdocs-en.yml` 需同步关注：

- 主题功能
- 插件
- 评论参数
- 分析参数
- 语言切换

### 8.3 评论系统维护

Giscus 参数统一放在 `extra.giscus`，不在单页重复硬编码。

---

## 九、已知风险与注意事项

1. 导航结构较大，YAML 缩进出错会导致构建失败。
2. 中英目录命名规范不同（中文自然语言 vs 英文 kebab-case），维护时需防止路径错配。
3. 大规模批量新增页面后，建议先本地构建再推送。
4. 站点内容增长较快，建议定期更新项目文档与工作规范避免信息过时。

---

## 十、后续建议

### 10.1 文档维护机制

- 每次新增一级栏目后，同步更新 `PROJECT_DOC.md` 与 `PROJECT_GUIDE.md`
- 每月进行一次“导航-目录-文档”一致性巡检

### 10.2 内容质量机制

- 为学习资源栏目建立统一模板（章节、知识点、教材、课程、参考）
- 为研究领域栏目建立统一证据链模板（机制、应用、证据、风险）

### 10.3 运营与分析

- 补齐 Google Analytics 实际 Tracking ID
- 增加基础 SEO 巡检流程（robots、sitemap、标题结构）

---

## 十一、相关文件索引

- 项目技术文档: `docs/PROJECT_DOC.md`
- 工作规范: `docs/PROJECT_GUIDE.md`
- 中文配置: `mkdocs.yml`
- 英文配置: `mkdocs-en.yml`
- 主题覆写: `overrides/main.html`
- 自动部署: `.github/workflows/deploy.yml`

---

## 文档更新时间

2026-04-05
