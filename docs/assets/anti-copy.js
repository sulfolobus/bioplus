// BioPlus Anti-Copy Protection
// 防止简单爬虫和抄袭

(function() {
    'use strict';

    // 1. 禁用右键菜单
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showCopyrightNotice();
        return false;
    }, false);

    // 2. 禁用 Ctrl+C / Cmd+C 复制
    document.addEventListener('keydown', function(e) {
        // 禁用 Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+P
        if ((e.ctrlKey || e.metaKey) && 
            (e.keyCode === 67 || e.keyCode === 85 || 
             e.keyCode === 83 || e.keyCode === 80)) {
            e.preventDefault();
            showCopyrightNotice();
            return false;
        }
    }, false);

    // 3. 禁用选中（可选，可能影响阅读体验）
    // document.addEventListener('selectstart', function(e) {
    //     e.preventDefault();
    //     return false;
    // }, false);

    // 4. 禁用拖拽
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    }, false);

    // 显示版权提示
    function showCopyrightNotice() {
        alert('© 2026 BioPlus\n\n内容受版权保护，如需引用请联系授权。\n\nBioPlus - 生命科学实践应用平台');
    }

    // 5. 添加水印到图片（可选）
    function addWatermark() {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            if (!images[i].alt.includes('BioPlus')) {
                images[i].title = '© BioPlus - 生命科学实践应用平台';
            }
        }
    }

    // 6. 简单的爬虫检测
    var botPattern = /bot|spider|crawler|scraper/i;
    var userAgent = navigator.userAgent;
    
    if (botPattern.test(userAgent)) {
        // 是爬虫，可以添加延迟或其他处理
        console.log('BioPlus: Bot detected - ' + userAgent);
    }

    console.log('BioPlus Anti-Copy Protection Enabled');
})();
