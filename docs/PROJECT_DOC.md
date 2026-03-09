# BioPlus 项目技术文档

## 项目状态

**上线地址**: https://sulfolobus.github.io/bioplus/
**英文版地址**: https://sulfolobus.github.io/bioplus/en/
**GitHub 仓库**: https://github.com/sulfolobus/bioplus
**项目状态**: 已上线运行中（中英文版本）
**当前语言**: 中文、English

---

## 已完成任务

| 序号 | 任务 | 说明 | 完成时间 |
|------|------|------|----------|
| 1 | 项目框架搭建 | MkDocs + Material 主题配置 | 2026-03-08 |
| 2 | GitHub 仓库创建 | sulfolobus/bioplus 公开仓库 | 2026-03-08 |
| 3 | GitHub Actions 部署 | 自动构建部署配置 | 2026-03-08 |
| 4 | 网站上线 | GitHub Pages 托管 | 2026-03-08 |
| 5 | 修复 logo 链接 | logo.png → logo.svg | 2026-03-08 |
| 6 | 新增科普文章 | 6篇入门科普文章 | 2026-03-08 |
| 7 | 配置本地搜索 | MkDocs Material 内置搜索 | 2026-03-08 |
| 8 | 配置 Google Analytics | 配置预留 | 2026-03-08 |
| 9 | 新增神经退化疾病板块 | 阿尔茨海默症、健忘症 | 2026-03-08 |
| 10 | 新增心血管疾病板块 | 高血压中西医治疗 | 2026-03-08 |
| 11 | 新增感官功能障碍板块 | 失明治疗、脑机接口 | 2026-03-08 |
| 12 | 新增英文版本 | 完整翻译 31 篇文章 | 2026-03-09 |

---

## 待完善任务

### 短期任务（1个月内）

| 序号 | 任务 | 说明 | 状态 | 费用 |
|------|------|------|------|------|
| 1 | 完善核心内容 | 填充研究领域的详细内容 | 待完成 | 免费 |
| 2 | 添加研究组信息 | 整理国内外研究团队资料 | 待完成 | 免费 |
| 3 | 更新成果转化 | 添加最新转化案例 | 待完成 | 免费 |
| 4 | 购买域名 | 建议 ~¥50/年或使用免费 .github.io 域名 | 可选 | 可选 |
| 5 | 配置自定义域名 | 购买域名后配置 DNS 解析 | 可选 | 可选 |
| 6 | 配置 Google Analytics | 注册并配置跟踪 ID | 待完成 | 免费 |

### 中期任务（1-3个月）

| 序号 | 任务 | 说明 | 状态 | 费用 |
|------|------|------|------|------|
| 7 | SEO 优化 | 搜索引擎优化 | 待完成 | 免费 |
| 8 | 社交媒体运营 | 微信公众号等 | 待完成 | 免费 |
| 9 | 添加更多研究领域 | 根据需求扩展 | 待完成 | 免费 |

### 长期任务（3个月以上）

| 序号 | 任务 | 说明 | 状态 | 费用 |
|------|------|------|------|------|
| 10 | 申请 Google AdSense | 广告变现 | 待完成 | 免费（需审核） |
| 11 | 推出付费内容 | 课程/报告 | 待完成 | 收入 |
| 12 | 商业合作 | 机构赞助 | 待完成 | 收入 |

---

## 一、项目概述

**项目名称**: BioPlus（生-plus）
**项目定位**: 生命科学实践应用科普平台
**技术栈**: MkDocs + Material 主题
**托管平台**: GitHub Pages（已部署）

---

## 二、技术方案（支持大型内容）

### 推荐方案：MkDocs + GitHub Pages

| 功能 | 方案 | 费用 |
|------|------|------|
| 框架 | MkDocs + Material | 免费 |
| 托管 | GitHub Pages | 免费 |
| 搜索 | Algolia DocSearch（申请免费） | 免费 |
| 统计 | Google Analytics | 免费 |
| 邮件订阅 | ConvertKit 免费版 | 免费 |
| 支付/会员 | Stripe（可选） | 手续费 |

> **说明**：当前使用 MkDocs 方案，与原 Docusaurus 方案功能等价，且更轻量、更易维护。

---

## 三、具体实施计划（已完成）

> 注：以下为原始计划，实际已完成情况见"已完成任务"部分。

### 阶段一：Week 1（1-7天）- 基础搭建 ✅

- 选名、搭建框架、确定分类结构 ✅
- 配置网站主题和导航 ✅
- 创建项目文档 ✅

### 阶段二：Week 2（8-14天）- 内容填充 ✅

- 填充核心内容（20-30个研究话题）✅
- 完善4个研究领域：基因编辑应用、医学诊断、药物研发、生物技术 ✅

### 阶段三：Week 3（15-21天）- 功能完善 ✅

- 添加搜索功能（本地搜索已配置）✅
- 研究组页面完善 ✅
- 新增神经、心血管、感官板块 ✅

### 阶段四：Week 4（22-30天）- 上线准备 ✅

- 测试、调试 ✅
- 盈利功能集成（预留配置）✅
- 正式上线 ✅

---

## 四、项目结构

```
bioplus/
├── mkdocs.yml              # 网站配置文件
├── .gitignore              # Git 忽略文件
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
├── .venv/                  # Python 虚拟环境（本地开发用）
└── docs/
    ├── index.md            # 首页（中文）
    ├── about.md            # 关于我们（中文）
    ├── PROJECT_DOC.md      # 项目技术文档
    ├── assets/
    │   ├── logo.svg        # 网站 Logo
    │   └── anti-copy.js   # 反复制脚本
    ├── hooks/
    │   └── custom_footer.py # 自定义页脚
    ├── robots.txt          # 搜索引擎配置
    │
    ├── 科普文章/           # 科普文章板块（中文）
    │   ├── index.md
    │   ├── 基因是什么.md
    │   ├── DNA工作原理.md
    │   ├── 蛋白质功能.md
    │   ├── CRISPR故事.md
    │   ├── 免疫系统.md
    │   └── 癌症原理.md
    │
    ├── 研究组/             # 研究组介绍（中文）
    │   └── index.md
    │
    ├── 成果转化/           # 成果转化展示（中文）
    │   └── index.md
    │
    ├── 基因编辑应用/        # 研究领域 1（中文）
    │   ├── index.md
    │   ├── CRISPR临床.md
    │   └── 基因治疗.md
    │
    ├── 医学诊断/           # 研究领域 2（中文）
    │   ├── index.md
    │   ├── 液体活检.md
    │   └── AI诊断.md
    │
    ├── 药物研发/           # 研究领域 3（中文）
    │   ├── index.md
    │   ├── 抗体药物.md
    │   └── AI制药.md
    │
    ├── 生物技术/           # 研究领域 4（中文）
    │   ├── index.md
    │   ├── 合成生物学.md
    │   └── 细胞治疗.md
    │
    ├── 神经退化疾病/       # 研究领域 5（中文）
    │   ├── index.md
    │   ├── 阿尔茨海默症.md
    │   └── 健忘症.md
    │
    ├── 心血管疾病/         # 研究领域 6（中文）
    │   ├── index.md
    │   └── 高血压.md
    │
    ├── 感官功能障碍/       # 研究领域 7（中文）
    │   ├── index.md
    │   ├── 失明治疗.md
    │   └── 脑机接口.md
    │
    # ==================== 英文版 ====================
    ├── en/                  # 英文版本根目录
    │   ├── index.md        # 首页（English）
    │   ├── about.md        # 关于我们（English）
    │   ├── gene-editing/
    │   │   ├── index.md
    │   │   ├── CRISPR-clinical.md
    │   │   └── gene-therapy.md
    │   ├── medical-diagnosis/
    │   │   ├── index.md
    │   │   ├── liquid-biopsy.md
    │   │   └── AI-diagnosis.md
    │   ├── drug-development/
    │   │   ├── index.md
    │   │   ├── antibody-drugs.md
    │   │   └── AI-pharmaceuticals.md
    │   ├── biotechnology/
    │   │   ├── index.md
    │   │   ├── synthetic-biology.md
    │   │   └── cell-therapy.md
    │   ├── neurodegenerative-diseases/
    │   │   ├── index.md
    │   │   ├── alzheimer.md
    │   │   └── amnesia.md
    │   ├── cardiovascular-diseases/
    │   │   ├── index.md
    │   │   └── hypertension.md
    │   ├── sensory-dysfunction/
    │   │   ├── index.md
    │   │   ├── blindness-treatment.md
    │   │   └── brain-machine-interface.md
    │   ├── research-groups/
    │   │   └── index.md
    │   ├── achievements/
    │   │   └── index.md
    │   └── popular-science/
    │       ├── index.md
    │       ├── what-is-gene.md
    │       ├── how-dna-works.md
    │       ├── protein-functions.md
    │       ├── crispr-story.md
    │       ├── immune-system.md
    │       └── cancer-basics.md
```

### 内容统计

| 板块 | 中文文章数 | 英文文章数 |
|------|-----------|-----------|
| 首页/关于 | 2 篇 | 2 篇 |
| 科普文章 | 7 篇 | 7 篇 |
| 研究组 | 1 篇 | 1 篇 |
| 成果转化 | 1 篇 | 1 篇 |
| 基因编辑应用 | 3 篇 | 3 篇 |
| 医学诊断 | 3 篇 | 3 篇 |
| 药物研发 | 3 篇 | 3 篇 |
| 生物技术 | 3 篇 | 3 篇 |
| 神经退化疾病 | 3 篇 | 3 篇 |
| 心血管疾病 | 2 篇 | 2 篇 |
| 感官功能障碍 | 3 篇 | 3 篇 |
| **总计** | **31 篇** | **31 篇** |

---

## 五、如何本地预览

### 前置要求

- Python 3.9+
- MkDocs
- mkdocs-material
- mkdocs-minify-plugin

### 安装依赖

```bash
# 创建虚拟环境（推荐）
python3 -m venv .venv

# 激活虚拟环境
source .venv/bin/activate

# 安装 MkDocs 和主题
pip install mkdocs mkdocs-material

# 安装插件（可选）
pip install mkdocs-minify-plugin
```

### 启动预览服务器

```bash
cd /Users/wy/Documents/bioplus

# 激活虚拟环境
source .venv/bin/activate

# 启动本地服务器
python3 -m mkdocs serve

# 或指定端口
python3 -m mkdocs serve --dev-addr 127.0.0.1:8000
```

### 访问预览

浏览器打开：http://127.0.0.1:8000/

---

## 六、上线部署（已自动化）

### GitHub Pages 部署（当前方案）

项目已配置 GitHub Actions 自动部署，每次推送到 main 分支会自动构建并部署。

**自动部署流程**：

```
本地修改 → git commit → git push → GitHub Actions 自动构建 → 网站自动上线（约1-2分钟）
```

**如何更新网站内容**：

```bash
# 1. 进入项目目录
cd /Users/wy/Documents/bioplus

# 2. 提交所有修改
git add .
git commit -m "更新内容描述"

# 3. 推送到 GitHub（自动触发部署）
git push
```

**部署说明**：
- 无需手动构建和部署
- 每次 push 后约 1-2 分钟自动完成
- 可在 GitHub 仓库的 Actions 页面查看部署状态

**访问网站**：

- URL: https://sulfolobus.github.io/bioplus/

---

### 绑定自定义域名（可选）

1. 购买域名（如阿里云、腾讯云）
2. 在 GitHub 仓库设置中添加域名
3. 配置 DNS 解析

| DNS 类型 | 值 |
|----------|-----|
| CNAME | sulfolobus.github.io |

---

## 七、盈利模式

### 当前阶段（内容积累期）

- 目标：积累流量和内容
- 任务：完善内容、建立品牌

### 第一阶段：广告收入

当月访问量达到一定规模后：

1. 申请 Google AdSense
2. 在网站中添加广告位
3. 获取广告分成

### 第二阶段：付费内容

- 深度研究报告
- 专家课程
- 付费会员专区

### 第三阶段：商业合作

- 研究机构赞助
- 企业科普合作
- 联合活动

---

## 八、后续任务

### 短期任务（1个月内）

| 序号 | 任务 | 说明 | 费用 |
|------|------|------|------|
| 1 | 完善核心内容 | 填充4个研究领域的详细内容 | 免费 |
| 2 | 添加研究组信息 | 整理国内外研究团队资料 | 免费 |
| 3 | 更新成果转化 | 添加最新转化案例 | 免费 |
| 4 | 修复缺失链接 | 修复 logo.png 和科普文章链接警告 | 免费 |
| 5 | 购买域名 | 建议 ~¥50/年或使用免费 .github.io 域名 | 可选 |
| 6 | 配置自定义域名 | 购买域名后配置 DNS 解析 | 可选 |
| 7 | 新增神经退化疾病板块 | 阿尔茨海默症、健忘症 | 免费 |
| 8 | 新增心血管疾病板块 | 高血压中西医治疗 | 免费 |
| 9 | 新增感官功能障碍板块 | 失明治疗、脑机接口 | 免费 |

### 中期任务（1-3个月）

| 序号 | 任务 | 说明 | 费用 |
|------|------|------|------|
| 6 | SEO 优化 | 搜索引擎优化 | 免费 |
| 7 | 申请 Algolia 搜索 | 免费搜索服务 | 免费 |
| 8 | Google Analytics | 流量分析 | 免费 |
| 9 | 社交媒体运营 | 微信公众号等 | 免费 |

### 长期任务（3个月以上）

| 序号 | 任务 | 说明 | 费用 |
|------|------|------|------|
| 10 | 申请 Google AdSense | 广告变现 | 免费（需审核） |
| 11 | 推出付费内容 | 课程/报告 | 收入 |
| 12 | 商业合作 | 机构赞助 | 收入 |

---

## 九、后续优化建议（免费方案）

### 1. 完善科普文章内容（免费）

当前有缺失文章链接的警告，需要创建以下文章文件：

```
docs/科普文章/
├── index.md           # 已存在
├── 基因是什么.md      # 需要创建
├── DNA工作原理.md     # 需要创建
├── 蛋白质功能.md      # 需要创建
├── CRISPR故事.md      # 需要创建
├── 免疫系统.md        # 需要创建
└── 癌症原理.md        # 需要创建
```

同时需要修复 index.md 中的 logo.png 链接问题（当前是 logo.svg）。

### 2. 配置 Algolia 搜索（免费）

**申请步骤**：
1. 访问 https://docsearch.algolia.com/apply/
2. 使用 GitHub 账号登录
3. 填写申请表单（需要 PUBLIC 仓库）
4. 等待审核（通常 1-2 周）

**替代方案**：MkDocs Material 自带本地搜索功能，无需配置。

### 3. 添加 Google Analytics 统计（免费）

在 mkdocs.yml 中添加：

```yaml
extra:
  analytics:
    provider: google
    property: G-XXXXXXXXXX
```

需要先在 https://analytics.google.com/ 注册账号获取跟踪 ID。

### 4. 购买自定义域名（可选）

| 平台 | 价格 | 说明 |
|------|------|------|
| 阿里云 | ~¥50/年 | 常用域名 |
| 腾讯云 | ~¥50/年 | 常用域名 |
| Cloudflare Registrar | ~$10/年 | 隐私保护更好 |

配置后可在 GitHub 仓库 Settings → Pages 中添加自定义域名。

---

## 十、常用命令

```bash
# 本地预览
python3 -m mkdocs serve

# 构建静态网站
python3 -m mkdocs build

# 查看帮助
python3 -m mkdocs --help
```

---

## 十一、注意事项

1. **内容写作**：使用 Markdown 格式，位于 `docs/` 目录
2. **图片放置**：图片放在 `docs/assets/` 目录
3. **中文支持**：MkDocs Material 主题原生支持中文
4. **更新配置**：修改 `mkdocs.yml` 后需要重启服务
5. **更新网站**：每次修改后执行 `git add . && git commit && git push`

---

## 十二、相关资源

- MkDocs 文档：https://www.mkdocs.org/
- Material 主题：https://squidfunk.github.io/mkdocs-material/
- GitHub：https://github.com/sulfolobus/bioplus
- GitHub Actions：https://docs.github.com/en/actions

---

*文档更新时间：2026-03-09*
