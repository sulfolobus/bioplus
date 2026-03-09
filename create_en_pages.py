#!/usr/bin/env python3
import os
import shutil

# English translations for disease names
translations = {
    # Bacterial diseases
    "肺炎": "pneumonia",
    "肠胃炎": "gastroenteritis", 
    "败血症": "septicemia",
    "腐甲病": "shell-rot",
    "腐皮病": "skin-rot",
    "眼病": "eye-disease",
    # Viral diseases
    "疱疹病毒病": "herpesvirus",
    "腺病毒病": "adenovirus",
    "虹彩病毒病": "iridovirus",
    # Fungal diseases
    "真菌性皮炎": "dermatitis",
    "甲壳真菌病": "shell-fungus",
    # Internal parasites
    "蛔虫病": "roundworms",
    "绦虫病": "tapeworms",
    "血液寄生虫病": "blood-parasites",
    "原虫病": "protozoa",
    # External parasites
    "蜱虫病": "ticks",
    "螨虫病": "mites",
    # Other diseases
    "软壳病": "soft-shell",
    "肥胖症": "obesity",
    "痛风": "gout",
    "膀胱结石": "bladder-stones",
    "中暑": "heat-stroke",
    "冻伤": "frostbite",
}

# Category mapping
category_mapping = {
    "细菌性疾病": "bacterial",
    "病毒性疾病": "viral",
    "真菌性疾病": "fungal",
    "体内寄生虫": "parasites",
    "体外寄生虫": "parasites",
    "其他疾病": "other",
}

def create_english_page(chinese_filename, category_cn, output_dir):
    """Create a placeholder English page"""
    disease_name = chinese_filename.replace(".md", "")
    english_name = translations.get(disease_name, disease_name)
    
    content = f"""# {disease_name}

*This page is under translation. Please refer to the Chinese version for content.*

---

## References

1. Zhang Jian. Color Atlas of Turtle Disease Diagnosis and Treatment in China
2. Zhang Jingchun. Turtle Care and Disease Prevention (2nd Edition)
3. Chen Jiajia. Turtle Home Medical Manual Collection
4. Zhou Ting, et al. Turtle Breeding in 7 Days. Nanjing Turtle Museum

> **Disclaimer**: This document is for reference only. Please consult a professional veterinarian.
"""
    
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Write file
    output_path = os.path.join(output_dir, f"{english_name}.md")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Created: {output_path}")

def main():
    base_cn = "/Users/wy/Documents/bioplus/docs/龟病防治"
    base_en = "/Users/wy/Documents/bioplus/docs/en/turtle-disease"
    
    # Process each category directory
    for category_cn in ["细菌性疾病", "病毒性疾病", "真菌性疾病", "体内寄生虫", "体外寄生虫", "其他疾病"]:
        category_path = os.path.join(base_cn, category_cn)
        if not os.path.exists(category_path):
            continue
            
        category_en = category_mapping[category_cn]
        output_dir = os.path.join(base_en, category_en)
        
        # Process each file in the category
        for filename in os.listdir(category_path):
            if filename.endswith(".md"):
                create_english_page(filename, category_cn, output_dir)

if __name__ == "__main__":
    main()
