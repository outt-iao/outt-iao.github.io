// 网站数据
const siteData = {
    "常用网站": [
        { name: "留言板", url: "http://120.76.41.136/", icon: "" },
        { name: "91", url: "http://120.76.41.136:91", icon: "" },
		{ name: "93", url: "http://120.76.41.136:93", icon: "" },
		{name: "99", url: "http://120.76.41.136:99", icon: "" },
        { name: "88", url: "http://120.76.41.136:88", icon: "" },
        { name: "5244", url: "http://120.76.41.136:5244", icon: "" },
		{ name: "7500", url: "http://120.76.41.136:7500" , icon: "" },
		{ name: "9005", url: "http://120.76.41.136:9005", icon: "" },
        { name: "9000", url: "http://120.76.41.136:9000", icon: "" }
    ],
    "工作相关": [
        { name: "qq邮箱", url: "https://mail.qq.com/", icon: "" },
        { name: "谷歌邮箱", url: "https://gmail.com", icon: "" },
         { name: "Github", url: "https://github.com/outt-iao/outt-iao.github.io", icon: "" }
    ],
    "学习资源": [
        { name: "Coursera", url: "https://www.coursera.org", icon: "" },
        { name: "edX", url: "https://www.edx.org", icon: "" },
        { name: "MDN", url: "https://developer.mozilla.org", icon: "" },
        { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "" }
    ]
};

// 渲染链接
function renderLinks() {
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        const title = category.querySelector('h2').textContent;
        const container = category.querySelector('.links-container');
        
        if (siteData[title]) {
            container.innerHTML = siteData[title].map(item => `
                <div class="link-item">
                    <a href="${item.url}" target="_blank">${item.name}</a>
                </div>
            `).join('');
        }
    });
}

// 搜索功能
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        if (!query) return;
        
        // 在所有链接中搜索
        let found = false;
        for (const [category, items] of Object.entries(siteData)) {
            for (const item of items) {
                if (item.name.toLowerCase().includes(query) || 
                    item.url.toLowerCase().includes(query)) {
                    window.open(item.url, '_blank');
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        
        if (!found) {
            // 如果没有找到，使用默认搜索引擎搜索
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// 更新日期
function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('update-date').textContent = now.toLocaleDateString('zh-CN', options);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderLinks();
    setupSearch();
    updateDate();
});