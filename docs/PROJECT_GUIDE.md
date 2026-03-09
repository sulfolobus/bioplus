# BioPlus 项目工作规范

## 文档信息

| 项目 | 内容 |
|------|------|
| 项目名称 | BioPlus 生命科学实践应用平台 |
| 项目地址 | https://github.com/sulfolobus/bioplus |
| 文档版本 | 1.0 |
| 创建日期 | 2026-03-09 |

---

## 一、项目架构

### 1.1 技术架构

```
BioPlus/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── .venv/                       # Python 虚拟环境
├── docs/                        # 中文文档（默认）
│   ├── index.md
│   ├── about.md
│   ├── PROJECT_DOC.md
│   ├── assets/                  # 静态资源
│   ├── 龟病防治/               # 研究领域示例
│   └── ...
├── docs/en/                     # 英文文档
│   ├── index.md
│   └── ...
├── turtle-knowledge-base/       # 原始资料库（本地）
├── mkdocs.yml                   # 中文版配置
├── mkdocs-en.yml               # 英文版配置
└── PROJECT_GUIDE.md            # 本规范文档
```

### 1.2 目录规范

| 目录 | 说明 |
|------|------|
| `docs/` | 中文内容根目录 |
| `docs/en/` | 英文内容根目录 |
| `docs/研究领域/` | 研究领域板块 |
| `turtle-knowledge-base/` | 原始资料提取文本 |
| `.github/workflows/` | CI/CD 配置 |

---

## 二、内容管理规范

### 2.1 研究领域添加流程

#### Step 1: 创建中文内容

```
# 1. 创建中文目录
mkdir docs/新领域名称/

# 2. 创建中文文档
docs/新领域名称/
├── index.md           # 板块首页
├── 主题1.md          # 子主题
├── 主题2.md          # 子主题
└── 主题3.md          # 子主题
```

#### Step 2: 创建英文内容

```
# 1. 创建英文目录（使用英文命名）
mkdir docs/en/topic-name/

# 2. 创建英文文档
docs/en/topic-name/
├── index.md
├── topic-1.md
├── topic-2.md
└── topic-3.md
```

#### Step 3: 更新导航配置

**中文版 (mkdocs.yml)**:
```yaml
nav:
  - 新领域名称:
      - 新领域名称/index.md
      - 新领域名称/主题1.md
      - 新领域名称/主题2.md
```

**英文版 (mkdocs-en.yml)**:
```yaml
nav:
  - New Topic:
      - topic-name/index.md
      - topic-name/topic-1.md
      - topic-name/topic-2.md
```

### 2.2 文档命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 中文目录 | 中文名称 | `龟病防治/` |
| 中文文件 | 中文标题.md | `常见龟病诊断.md` |
| 英文目录 | 英文名称(kebab-case) | `turtle-disease/` |
| 英文文件 | 英文标题(kebab-case) | `common-diagnosis.md` |

### 2.3 文档格式规范

#### 中文文档头部

```markdown
---
comments: true
---

# 文档标题

## 一级标题

内容...

## 二级标题

内容...
```

#### 引用格式

```markdown
> **引用来源**：[书籍名称/作者] [M/PDF]. 出版信息.

> **参考**：[网页标题](URL)
```

---

## 三、资料库管理

### 3.1 原始资料存储

所有原始资料（PDF/Word/Excel）保存在：
```
/Users/wy/Desktop/龟宠健康知识库/
```

### 3.2 提取文本存储

提取后的文本保存在：
```
turtle-knowledge-base/
├── 原始文件名.txt
├── summary.json           # 提取摘要
└── ...
```

### 3.3 资料处理流程

```
原始资料(PDF) → 文本提取 → 内容整理 → 去重合并 → 网站内容
     ↓              ↓           ↓          ↓
  知识库目录    extract_*.py   人工/AI   mkdocs
```

---

## 四、部署规范

### 4.1 部署流程

```bash
# 1. 进入项目目录
cd /Users/wy/Documents/bioplus

# 2. 添加修改
git add .

# 3. 提交说明
git commit -m "描述修改内容"

# 4. 推送到 GitHub（自动触发部署）
git push
```

### 4.2 部署检查

- GitHub Actions 状态：https://github.com/sulfolobus/bioplus/actions
- 网站验证：https://sulfolobus.github.io/bioplus/

---

## 五、新研究领域模板

### 5.1 中文模板

```markdown
---
comments: true
---

# 研究领域名称

研究领域简介...

## 主题一

### 子主题介绍

内容...

## 主题二

### 子主题介绍

内容...

---

## 引用来源

> 主要参考资料列表
```

### 5.2 英文模板

```markdown
---
comments: true
---

# Research Topic Name

Introduction to the research topic...

## Topic One

### Subtopic Introduction

Content...

## Topic Two

### Subtopic Introduction

Content...

---

## References

> Main reference list
```

---

## 六、常用命令

### 6.1 本地预览

```bash
# 激活虚拟环境
source .venv/bin/activate

# 启动本地服务器
python3 -m mkdocs serve

# 或指定端口
python3 -m mkdocs serve --dev-addr 127.0.0.1:8000
```

### 6.2 构建网站

```bash
# 构建中文版
mkdocs build -f mkdocs.yml

# 构建英文版
mkdocs build -f mkdocs-en.yml
```

---

## 七、索引和映射

### 7.1 中文-英文目录映射

| 中文目录 | 英文目录 |
|----------|----------|
| 基因编辑应用 | gene-editing |
| 医学诊断 | medical-diagnosis |
| 药物研发 | drug-development |
| 生物技术 | biotechnology |
| 神经退化疾病 | neurodegenerative-diseases |
| 心血管疾病 | cardiovascular-diseases |
| 感官功能障碍 | sensory-dysfunction |
| 龟病防治 | turtle-disease |

### 7.2 页面映射

| 中文页面 | 英文页面 |
|----------|----------|
| 龟病综合防治 | comprehensive-treatment |
| 常见龟病诊断 | common-diagnosis |
| 龟类营养指南 | turtle-nutrition |

---

## 八、交接检查清单

### 新成员入职检查

- [ ] 获取 GitHub 仓库访问权限
- [ ] 安装 Python 3.9+
- [ ] 克隆仓库到本地
- [ ] 阅读 PROJECT_GUIDE.md
- [ ] 阅读 PROJECT_DOC.md
- [ ] 了解目录结构
- [ ] 掌握本地预览方法
- [ ] 了解部署流程

### 内容更新检查

- [ ] 中文内容创建
- [ ] 英文内容创建
- [ ] 导航配置更新（两个yml）
- [ ] 本地预览测试
- [ ] GitHub Actions 部署成功
- [ ] 网站内容验证

---

## 九、相关文档

| 文档 | 说明 |
|------|------|
| PROJECT_DOC.md | 项目技术文档 |
| PROJECT_GUIDE.md | 工作规范（本文件） |
| mkdocs.yml | 中文版配置 |
| mkdocs-en.yml | 英文版配置 |

---

## 十、研究领域完善方案

### 10.1 完善目标

将每个研究领域扩展为类似龟病防治的详细结构：
- 6 大类疾病/研究方向
- 每类下设详细专题页面
- 包含病因、症状、治疗、预防等完整内容

### 10.2 完善领域清单

| 序号 | 研究领域 | 当前状态 | 目标完善 |
|------|----------|----------|----------|
| 1 | 基因编辑应用 | 3篇文章 | 扩展为 20+ 页面 |
| 2 | 医学诊断 | 3篇文章 | 扩展为 20+ 页面 |
| 3 | 药物研发 | 3篇文章 | 扩展为 20+ 页面 |
| 4 | 生物技术 | 3篇文章 | 扩展为 20+ 页面 |
| 5 | 神经退化疾病 | 3篇文章 | 扩展为 20+ 页面 |
| 6 | 心血管疾病 | 2篇文章 | 扩展为 20+ 页面 |
| 7 | 感官功能障碍 | 3篇文章 | 扩展为 20+ 页面 |

### 10.3 完善结构模板

以"基因编辑应用"为例：

```
基因编辑应用/
├── index.md                    # 板块首页
├── 基因编辑综合指南.md         # 综合指南
├── CRISPR技术/
│   ├── CRISPR原理.md
│   ├── CRISPR临床应用.md
│   ├── CRISPR挑战与展望.md
├── 基因治疗/
│   ├── 基因治疗原理.md
│   ├── 遗传病治疗.md
│   ├── 癌症治疗.md
│   └── 眼部疾病治疗.md
├── 基因递送/
│   ├── 病毒载体.md
│   ├── 纳米颗粒.md
│   └── LNP技术.md
├── 基因编辑工具/
│   ├── CRISPR-Cas9.md
│   ├── Base编辑.md
│   └── Prime编辑.md
└── 伦理与监管/
    ├── 伦理问题.md
    └── 监管政策.md
```

### 10.4 执行步骤

#### Step 1: 确定细分领域

参考权威资料，确定每个大类下的具体研究方向。

#### Step 2: 收集资料

从学术文献、科普资料中提取内容。

#### Step 3: 创建内容

按模板创建中英文页面。

#### Step 4: 添加引用

使用规范格式添加参考文献。

#### Step 5: 更新导航

在 mkdocs.yml 和 mkdocs-en.yml 中添加链接。

### 10.5 龟病防治参考案例

龟病防治板块已完成完善，可作为参考：

- 细菌性疾病（6种）
- 病毒性疾病（3种）
- 真菌性疾病（2种）
- 体内寄生虫（4种）
- 体外寄生虫（2种）
- 其他疾病（6种）

**总计**: 27 篇文章，24 个详情页面

### 10.6 内容质量标准

- 每篇文章至少 1500 字
- 包含病因、症状、治疗、预防
- 引用权威文献
- 定期更新最新研究进展

---

*最后更新：2026-03-09*
