# Base Editing

Base editing is a precise genome editing technology that enables direct conversion of one base to another without double-strand breaks.

## Technology Overview

### What is Base Editing?

Base editing allows precise point mutations:
- **C→T** (or G→A) conversions
- **A→G** (or T→C) conversions

### Editor Types

| Type | Target | Conversion |
|------|--------|------------|
| BE3 | Cytosine | C→T |
| BE4max | Cytosine | C→T (improved) |
| ABEmax | Adenine | A→G |
| Target-AID | Both | Precise editing |

## Mechanism

### Cytosine Base Editor (CBE)

```
sgRNA + Cas9n + APOBEC1 → 复合物 → 靶向DNA → C脱氨 → U → T
```

**关键步骤：**
1. sgRNA 引导至目标位点
2. Cas9n 切割单链
3. APOBEC1 将 C 脱氨为 U
4. 细胞修复将 U 转化为 T

### Adenine Base Editor (ABE)

```
sgRNA + Cas9n + TadA-8e → 复合物 → 靶向DNA → A脱氨 → I → G
```

## Applications

### Disease Treatment

| Disease | Mutation | Editor |
|---------|----------|--------|
| Sickle cell | GAG→GTG | ABE |
| Tay-Sachs | CAT→COT | CBE |
| Duchenne | various | CBE/ABE |

### Research Applications

- 模拟点突变
- 研究基因功能
- 创建疾病模型

## Advantages vs CRISPR-Cas9

| 方面 | Base Editing | CRISPR-Cas9 |
|------|--------------|-------------|
| 精确性 | 单碱基 | 双链断裂 |
| 安全性 | 无DSB | 潜在脱靶 |
| 效率 | 高 | 中等 |

## Limitations

- **PAM 要求**：需要特定序列
- **编辑窗口**：仅 3-5 bp
- **旁观者效应**：邻近碱基影响

## 参考文献

1. Rees HA, Liu DR. Base editing: precision chemistry on the genome. Nat Rev Mol Cell Biol. 2018
2. Komor AC, et al. Improved base editing. Science. 2016

> **免责声明**：本文仅供科普参考。
