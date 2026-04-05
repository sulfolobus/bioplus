# BioPlus 项目工作规范

## 项目信息

| 项目 | 内容 |
|------|------|
| 项目名称 | BioPlus 生命科学实践应用平台 |
| 项目地址 | https://github.com/sulfolobus/bioplus |
| 网站地址 | https://sulfolobus.github.io/bioplus/ |
| 英文版 | https://sulfolobus.github.io/bioplus/en/ |

---

## 一、网站架构

### 1.1 技术栈

- **框架**: MkDocs + Material 主题
- **托管**: GitHub Pages
- **部署**: GitHub Actions (自动部署)

### 1.2 目录结构

```
bioplus/
├── mkdocs.yml           # 中文版配置
├── mkdocs-en.yml        # 英文版配置
├── docs/                # 中文内容
│   ├── index.md         # 首页
│   ├── about.md         # 关于我们
│   ├── PROJECT_DOC.md   # 项目技术文档
│   ├── PROJECT_GUIDE.md # 项目工作规范
│   ├── en/              # 英文内容
│   ├── 龟病防治/        # 研究领域
│   └── ...
└── .github/workflows/   # CI/CD 配置
```

---

## 二、内容管理

### 2.1 研究领域添加流程

**中文内容 → 英文内容 → 导航配置**

#### Step 1: 创建中文内容

```bash
mkdir docs/新领域名称/
# 创建 index.md 和相关主题文件
```

#### Step 2: 创建英文内容

```bash
mkdir docs/en/topic-name/
# 创建对应英文文件
```

#### Step 3: 更新导航

- `mkdocs.yml` - 中文导航
- `mkdocs-en.yml` - 英文导航

### 2.2 文档命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 中文目录 | 中文名称 | `龟病防治/` |
| 中文文件 | 中文标题.md | `常见龟病诊断.md` |
| 英文目录 | 英文kebab-case | `turtle-disease/` |
| 英文文件 | 英文kebab-case | `common-diagnosis.md` |

---

## 三、引用格式规范

### 3.1 中文参考文献格式

```markdown
1. 章剑, 著. 《中国龟鳖疾病诊治原色图谱》[M]
2. 张景春, 编著. 《养龟与疾病防治（第2版）》[M]
3. 陈佳佳. 《乌龟家庭医学手册合集》
4. 周婷, 等, 编著. 《龟鳖养殖7日通》[M]. 南京龟鳖博物馆
```

### 3.2 禁止出现的内容

- ❌ `Z-Library`
- ❌ `[PDF].` (末尾句点)
- ❌ `编著。《` (应为 `编著. 《`)
- ❌ `等编著.` (应为 `等, 编著.`)

---

## 四、语言切换

### 4.1 配置位置

`mkdocs.yml` 和 `mkdocs-en.yml` 中的 `extra.alternate` 配置

### 4.2 链接格式

```yaml
extra:
  alternate:
    - link: /bioplus/en/
      name: English
      lang: en
    - link: /bioplus/
      name: 中文
      lang: zh
```

**注意**: 链接必须包含完整路径 `/bioplus/`

---

## 五、部署流程

### 5.1 自动部署

每次推送到 main 分支自动触发部署，约 1-2 分钟上线。

```bash
git add .
git commit -m "描述修改"
git push
```

### 5.2 本地预览

```bash
# 激活虚拟环境
source .venv/bin/activate

# 启动本地服务器
python3 -m mkdocs serve

# 或指定端口
python3 -m mkdocs serve --dev-addr 127.0.0.1:8000
```

---

## 六、中英文映射表

| 中文目录 | 英文目录 |
|----------|----------|
| 龟病防治 | turtle-disease |
| 基因编辑应用 | gene-editing |
| 医学诊断 | medical-diagnosis |
| 药物研发 | drug-development |
| 生物技术 | biotechnology |
| 神经退化疾病 | neurodegenerative-diseases |
| 心血管疾病 | cardiovascular-diseases |
| 感官功能障碍 | sensory-dysfunction |

---

## 七、检查清单

### 内容更新检查

- [ ] 中文内容创建
- [ ] 英文内容创建
- [ ] 导航配置更新（两个yml）
- [ ] 引用格式规范
- [ ] 本地预览测试
- [ ] GitHub Actions 成功

---

*最后更新：2026-03-09*
