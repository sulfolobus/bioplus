def on_page_context(context, page, page_obj):
    return """
<footer class="md-footer">
  <div class="md-footer-meta md-typeset">
    <div class="md-footer-meta__inner md-grid">
      <div class="md-footer-copyright">
        <span class="md-footer-copyright__highlight">
          BioPlus - 生命科学实践应用平台
        </span>
        <span class="md-footer-copyright__highlight">
          聚焦基因编辑、医学诊断、药物研发、生物技术
        </span>
      </div>
      <div class="md-footer-social">
        <a href="https://github.com/yourusername/bioplus" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>
"""
