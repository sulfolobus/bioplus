# BioPlus 项目工作交接文档

**创建时间**: 2026-03-08
**项目状态**: 开发中

---

## 📁 项目位置

**主目录**: `/Users/wy/Documents/bioplus`

**备用位置（未完成文件）**: `/Users/wy/Downloads/bioplus`

---

## ✅ 已完成事项

### 1. 网站框架搭建
- [x] 使用 MkDocs + Material 主题
- [x] 配置中文导航
- [x] 创建4个核心内容板块：
  - 基因编辑应用
  - 医学诊断
  - 药物研发
  - 生物技术

### 2. 内容填充
- [x] 首页 (index.md)
- [x] 关于我们 (about.md)
- [x] 研究组页面 (research-groups/index.md)
- [x] 成果转化页面 (achievements/index.md)
- [x] 科普文章页面 (科普文章/index.md)
- [x] 各板块详细内容页（共12+篇）

### 3. 文档
- [x] 项目技术文档 (PROJECT_DOC.md) - 包含完整的技术方案、部署指南、盈利模式
- [x] .gitignore 文件

### 4. 基础防护
- [x] robots.txt（阻止部分爬虫）
- [x] anti-copy.js（禁用右键、快捷键复制）
- [x] mkdocs.yml 配置更新

---

## ⏳ 待完成事项

### 高优先级

| 序号 | 任务 | 说明 |
|------|------|------|
| 1 | **复制文件到主目录** | 从 Downloads 复制到 Documents/bioplus |
| 2 | **配置 mkdocs.yml** | 启用 anti-copy.js 脚本 |
| 3 | **本地预览测试** | 验证网站正常运行 |
| 4 | **购买域名** | 建议 ~¥50/年 |

### 中优先级

| 序号 | 任务 | 说明 |
|------|------|------|
| 5 | GitHub 仓库创建 | 创建 bioplus 仓库 |
| 6 | 部署到 GitHub Pages | 免费托管 |
| 7 | 完善内容 | 添加更多研究领域内容 |
| 8 | 申请 Algolia 搜索 | 免费搜索服务 |

### 低优先级

| 序号 | 任务 | 说明 |
|------|------|------|
| 9 | Google Analytics | 流量统计 |
| 10 | Google AdSense | 广告变现（需流量基础） |
| 11 | 社交媒体运营 | 微信公众号等 |

---

## 📝 重要文件说明

### 需要手动复制的文件

由于环境限制，以下文件创建在错误位置，需要手动复制：

```
从: /Users/wy/Downloads/bioplus/
到: /Users/wy/Documents/bioplus/

需要复 docs/
│   ├── robots.txt           #制的文件:
├── 新增
│   ├── assets/
│   │   └── anti-copy.js     # 新增
│   └── PROJECT_DOC.md       # 项目文档
├── mkdocs.yml               # 已更新
└── .gitignore               # 已更新
```

### 复制后的操作

1. 打开终端
2. 运行: `cd /Users/wy/Documents/bioplus`
3. 运行: `python3 -m mkdocs serve`
4. 浏览器访问: http://127.0.0.1:8000/

---

## 🔧 技术栈

| 功能 | 方案 |
|------|------|
| 框架 | MkDocs + Material |
| 托管 | GitHub Pages（免费） |
| 搜索 | Algolia DocSearch（申请免费） |
| 统计 | Google Analytics（免费） |

---

## 📞 对话历史要点

1. **项目名称**: BioPlus（生-plus）
2. **定位**: 生命科学实践应用科普平台
3. **内容方向**: 聚焦实践应用领域（基因编辑、医学诊断、药物研发、生物技术）
4. **盈利模式**: 积极变现（广告+付费内容+商业合作）
5. **上线目标**: 1个月内

---

## 💡 建议下一步

1. 先复制文件到主目录
2. 运行本地预览确认正常
3. 开始填充实际内容
4. 创建 GitHub 仓库并部署

---

*交接完成，祝工作顺利！*
