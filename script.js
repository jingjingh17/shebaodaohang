// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeChart();
    addHoverEffects();
});

// 初始化图表
function initializeChart() {
    const canvas = document.getElementById('lineChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 设置图表样式
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    
    // 模拟数据点 - 确保左右边距一致
    const margin = 30; // 左右边距
    const chartWidth = width - (margin * 2);
    const chartHeight = height - 60; // 为标签留出空间
    
    const dataPoints = [
        {x: margin + (chartWidth * 0), y: chartHeight + 20 - 120},   // 2017
        {x: margin + (chartWidth * 0.25), y: chartHeight + 20 - 100}, // 2018
        {x: margin + (chartWidth * 0.5), y: chartHeight + 20 - 80},   // 2019
        {x: margin + (chartWidth * 0.75), y: chartHeight + 20 - 90},  // 2020
        {x: margin + (chartWidth * 1), y: chartHeight + 20 - 70}      // 2021
    ];
    
    // 绘制折线图
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    
    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y);
    }
    ctx.stroke();
    
    // 绘制数据点
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    dataPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
    
    // 绘制填充区域
    const fillBottom = chartHeight + 20;
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, fillBottom);
    ctx.lineTo(dataPoints[0].x, dataPoints[0].y);
    
    for (let i = 1; i < dataPoints.length; i++) {
        ctx.lineTo(dataPoints[i].x, dataPoints[i].y);
    }
    
    ctx.lineTo(dataPoints[dataPoints.length - 1].x, fillBottom);
    ctx.closePath();
    
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // 绘制X轴标签
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    const years = ['2017', '2018', '2019', '2020', '2021'];
    dataPoints.forEach((point, index) => {
        ctx.fillText(years[index], point.x, height - 10);
    });
}

// 添加悬停效果
function addHoverEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 导航函数 - 直接跳转到指定网址
function navigateToCard1() {
    // 连续劳务个税计算器
    window.open('http://cfpeo.viptoyou.cn/', '_blank');
}

function navigateToCard2() {
    // 个税计算器
    window.open('http://cfpeotaxcal.viptoyou.cn/', '_blank');
}

function navigateToCard3() {
    // 智能社保核算器
    window.open('https://cfpeoshebao.linknest.cn/', '_blank');
}

// 输入框交互效果
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // 输入验证
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = 'rgba(255, 255, 255, 0.8)';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        });
    });
});

// 表格行悬停效果
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// 指标卡片悬停效果
document.addEventListener('DOMContentLoaded', function() {
    const metricItems = document.querySelectorAll('.metric-item');
    
    metricItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'rgba(255, 255, 255, 0.25)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

// 平滑滚动效果
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 页面加载动画
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Alt + 1, 2, 3 快速导航到对应卡片
    if (e.altKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                navigateToCard1();
                break;
            case '2':
                e.preventDefault();
                navigateToCard2();
                break;
            case '3':
                e.preventDefault();
                navigateToCard3();
                break;
        }
    }
});

// 响应式图表重绘
window.addEventListener('resize', function() {
    setTimeout(initializeChart, 100);
});

// 添加加载提示
function showLoading(cardIndex) {
    const cards = document.querySelectorAll('.card');
    const card = cards[cardIndex - 1];
    const btn = card.querySelector('.input-btn');
    
    const originalText = btn.textContent;
    btn.textContent = '加载中...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2000);
}

// 增强的导航函数，包含加载效果
function enhancedNavigateToCard1() {
    showLoading(1);
    setTimeout(() => {
        navigateToCard1();
    }, 500);
}

function enhancedNavigateToCard2() {
    showLoading(2);
    setTimeout(() => {
        navigateToCard2();
    }, 500);
}

function enhancedNavigateToCard3() {
    showLoading(3);
    setTimeout(() => {
        navigateToCard3();
    }, 500);
}

// 更新按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    if (cards[0]) cards[0].querySelector('.input-btn').onclick = enhancedNavigateToCard1;
    if (cards[1]) cards[1].querySelector('.input-btn').onclick = enhancedNavigateToCard2;
    if (cards[2]) cards[2].querySelector('.input-btn').onclick = enhancedNavigateToCard3;
});
