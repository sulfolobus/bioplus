# BioPlus - Custom Footer Hook
# 正确实现 MkDocs hook，用于注入自定义页脚内容

def on_page_markdown(markdown, page, config, files):
    """
    在页面 Markdown 渲染前处理（预留扩展点）
    当前不需要修改 Markdown 内容
    """
    return markdown


def on_env(env, config, files):
    """
    在 Jinja2 环境初始化后添加自定义模板变量
    用于在模板中访问自定义配置
    """
    env.globals['bioplus_footer'] = {
        'site_name_zh': 'BioPlus - 生命科学实践应用平台',
        'site_name_en': 'BioPlus - Life Science Platform',
        'slogan_zh': '聚焦基因编辑、医学诊断、药物研发、生物技术',
        'slogan_en': 'Gene Editing · Medical Diagnosis · Drug Development · Biotechnology',
    }
    return env
