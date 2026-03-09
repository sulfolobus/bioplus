# 本地 AI 环境配置

## 📋 概述

本文档记录了本地 AI 环境的配置信息，包括大语言模型和 OpenClaw 助手。

---

## 🖥️ 电脑配置

| 项目 | 规格 |
|------|------|
| CPU | Apple M4 Max (ARM64) |
| 内存 | 38 GB |
| 核心数 | 14 核 (10 性能 + 4 效率) |
| 系统 | macOS |

---

## 🤖 已安装的大模型

### Ollama 本地模型

| 模型 | 大小 | 擅长领域 |
|------|------|----------|
| **qwen2.5:14b** | 9.0 GB | 中文对话、写作、日常办公 |
| **deepseek-r1:14b** | 9.0 GB | 代码生成、数学推理、逻辑分析 |
| **phi3:14b** | 7.9 GB | 编程开发、轻量快速 |

**总计**：约 26 GB

### 模型服务地址

- **地址**：`http://localhost:11434`
- **API 接口**：`http://localhost:11434/api`

---

## 🦞 OpenClaw

### 安装位置

- **源码位置**：`/Users/wy/Downloads/openclaw`
- **大小**：约 2.1 GB

### 启动方式

```bash
# 1. 进入目录
cd /Users/wy/Downloads/openclaw

# 2. 设置 Node.js 路径
export PATH="$HOME/node-v22.12.0-darwin-arm64/bin:$PATH"

# 3. 启动服务
node openclaw.mjs gateway
```

### 配置步骤

1. 运行初始配置：
   ```bash
   node openclaw.mjs setup
   ```

2. 在配置中选择 Ollama 作为模型提供者
3. 输入模型地址：`http://localhost:11434`
4. 选择要使用的模型

---

## 🚀 快速使用指南

### 使用 Ollama 模型

```bash
# 启动 Qwen 模型
ollama run qwen2.5:14b

# 启动 DeepSeek 模型
ollama run deepseek-r1:14b

# 启动 Phi-3 模型
ollama run phi3:14b

# 查看已安装模型
ollama list
```

### 使用 OpenClaw

```bash
# 启动 OpenClaw 服务
cd /Users/wy/Downloads/openclaw
export PATH="$HOME/node-v22.12.0-darwin-arm64/bin:$PATH"
node openclaw.mjs gateway

# 访问控制面板
# 浏览器打开 http://localhost:8080
```

---

## 📊 内存使用情况

| 项目 | 内存占用 |
|------|----------|
| 系统基础 | ~3-5 GB |
| qwen2.5:14b | ~9-10 GB |
| deepseek-r1:14b | ~9-10 GB |
| phi3:14b | ~8 GB |
| **可用空间** | ~10-15 GB |

---

## 💡 推荐使用场景

| 场景 | 推荐模型 |
|------|----------|
| 中文写作、日常对话 | `qwen2.5:14b` |
| 编程开发、技术问题 | `deepseek-r1:14b` |
| 快速响应、简单任务 | `phi3:14b` |
| OpenClaw AI 助手 | 任意模型（通过配置选择） |

---

## 🔧 常用命令

```bash
# 查看模型列表
ollama list

# 运行模型
ollama run <model-name>

# 查看 Ollama 状态
curl http://localhost:11434/api/tags

# 测试模型 API
curl http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{"model": "qwen2.5:14b", "prompt": "Hello"}'
```

---

## 📝 注意事项

1. **内存管理**：不建议同时运行多个大模型，会导致内存不足
2. **模型切换**：使用 `ollama run <model-name>` 切换不同模型
3. **服务地址**：Ollama 默认监听 `localhost:11434`
4. **数据安全**：所有数据保存在本地，隐私安全

---

## 🔗 相关链接

- [Ollama 官网](https://ollama.com)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [OpenClaw 文档](https://docs.openclaw.ai)

---

*最后更新：2026-03-08*
