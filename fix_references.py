#!/usr/bin/env python3
import os
import re

def fix_references(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix patterns
    # 1. "著. " -> "著. " (already good)
    # 2. "编著. " -> "编著. " (already good)
    # 3. "等编著. " -> "等, 编著. "
    content = re.sub(r'等编著\. ', '等, 编著. ', content)
    # 4. "安宁编著" -> "安宁, 编著"
    content = re.sub(r'安宁编著', '安宁, 编著', content)
    # 5. "章剑著" -> "章剑, 著"
    content = re.sub(r'章剑著\.', '章剑, 著.', content)
    # 6. "张景春编著" -> "张景春, 编著"
    content = re.sub(r'张景春编著\.', '张景春, 编著.', content)
    # 7. "周婷等编著" -> "周婷, 等, 编著"
    content = re.sub(r'周婷等编著\.', '周婷, 等, 编著.', content)
    # 8. "陈佳佳。《" -> "陈佳佳. 《"
    content = re.sub(r'陈佳佳。《', '陈佳佳. 《', content)
    # 9. Remove trailing dots after ] and before newline
    content = re.sub(r'\[M\]\. ', '[M]. ', content)
    content = re.sub(r'\[M\]$', '[M]', content, flags=re.MULTILINE)
    # 10. Fix "》. " to "》. "
    content = re.sub(r'》\.', '》.', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    base_dir = "/Users/wy/Documents/bioplus/docs/龟病防治"
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                fix_references(filepath)
                print(f"Fixed: {filepath}")

if __name__ == "__main__":
    main()
