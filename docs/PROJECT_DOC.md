# BioPlus 项目技术文档

## 项目状态

**上线地址**: https://sulfolobus.github.io/bioplus/
**GitHub 仓库**: https://github.com/sulfolobus/bioplus

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

## 三、具体实施计划

### 阶段一：Week 1（1-7天）- 基础搭建

- 选名、搭建框架、确定分类结构
- 配置网站主题和导航
- 创建项目文档

### 阶段二：Week 2（8-14天）- 内容填充

- 填充核心内容（20-30个研究话题）
- 完善4个研究领域：基因编辑应用、医学诊断、药物研发、生物技术

### 阶段三：Week 3（15-21天）- 功能完善

- 添加搜索功能（Algolia）
- 会员系统基础功能
- 研究组页面完善

### 阶段四：Week 4（22-30天）- 上线准备

- 测试、调试
- 盈利功能集成
- 正式上线

---

## 四、项目结构

```
bioplus/
├── mkdocs.yml              # 网站配置文件
├── .gitignore              # Git 忽略文件
├── README.md               # 项目说明
└── docs/
    ├── index.md            # 首页
    ├── about.md            # 关于我们
    ├── 科普文章/
    │   └── index.md        # 科普文章列表
    ├── 研究组/
    │   └── index.md        # 研究组介绍
    ├── 成果转化/
    │   └── index.md        # 成果转化展示
    ├── 基因编辑应用/
    │   ├── index.md
    │   ├── CRISPR临床.md
    │   └── 基因治疗.md
    ├── 医学诊断/
    │   ├── index.md
    │   ├── 液体活检.md
    │   └── AI诊断.md
    ├── 药物研发/
    │   ├── index.md
    │   ├── 抗体药物.md
    │   └── AI制药.md
    └── 生物技术/
        ├── index.md
        ├── 合成生物学.md
        └── 细胞治疗.md
```

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

**部署流程**：

1. 推送代码到 GitHub
2. GitHub Actions 自动构建 MkDocs
3. 自动部署到 GitHub Pages

```bash
# 推送更新
git add .
git commit -m "更新内容"
git push
```

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

| 序号 | 任务 | 说明 |
|------|------|------|
| 1 | 完善核心内容 | 填充4个研究领域的详细内容 |
| 2 | 添加研究组信息 | 整理国内外研究团队资料 |
| 3 | 更新成果转化 | 添加最新转化案例 |
| 4 | 购买域名 | 建议 ~¥50/年 |

### 中期任务（1-3个月）

| 序号 | 任务 | 说明 |
|------|------|------|
| 5 | SEO 优化 | 搜索引擎优化 |
| 6 | 申请 Algolia 搜索 | 免费搜索服务 |
| 7 | Google Analytics | 流量分析 |
| 8 | 社交媒体运营 | 微信公众号等 |

### 长期任务（3个月以上）

| 序号 | 任务 | 说明 |
|------|------|------|
| 9 | 申请 Google AdSense | 广告变现 |
| 10 | 推出付费内容 | 课程/报告 |
| 11 | 商业合作 | 机构赞助 |

---

## 九、常用命令

```bash
# 本地预览
python3 -m mkdocs serve

# 构建静态网站
python3 -m mkdocs build

# 查看帮助
python3 -m mkdocs --help
```

---

## 十、注意事项

1. **内容写作**：使用 Markdown 格式，位于 `docs/` 目录
2. **图片放置**：图片放在 `docs/assets/` 目录
3. **中文支持**：MkDocs Material 主题原生支持中文
4. **更新配置**：修改 `mkdocs.yml` 后需要重启服务

---

## 十一、相关资源

- MkDocs 文档：https://www.mkdocs.org/
- Material 主题：https://squidfunk.github.io/mkdocs-material/
- GitHub：https://github.com/sulfolobus/bioplus
- GitHub Actions：https://docs.github.com/en/actions

---

*文档更新时间：2026-03-08*
