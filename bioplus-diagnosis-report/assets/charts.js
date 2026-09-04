// BioPlus Diagnosis Report - Charts
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#0d9488';
  var accent2 = style.getPropertyValue('--accent2').trim() || '#06b6d4';
  var ink = style.getPropertyValue('--ink').trim() || '#1e293b';
  var muted = style.getPropertyValue('--muted').trim() || '#64748b';
  var rule = style.getPropertyValue('--rule').trim() || 'rgba(0, 150, 136, 0.15)';
  var bg2 = style.getPropertyValue('--bg2').trim() || '#ffffff';
  var success = style.getPropertyValue('--success').trim() || '#10b981';
  var warning = style.getPropertyValue('--warning').trim() || '#f59e0b';
  var danger = style.getPropertyValue('--danger').trim() || '#ef4444';

  // ============ Chart 1: Security Radar ============
  var securityChart = echarts.init(document.getElementById('chart-security'), null, { renderer: 'svg' });
  securityChart.setOption({
    animation: false,
    tooltip: {
      appendToBody: true,
      trigger: 'item'
    },
    legend: {
      data: ['修复前', '修复后'],
      bottom: 0,
      textStyle: { color: ink }
    },
    radar: {
      indicator: [
        { name: 'XSS 防护 (CSP)', max: 100 },
        { name: '点击劫持防护', max: 100 },
        { name: 'MIME 安全', max: 100 },
        { name: '隐私保护', max: 100 },
        { name: '权限控制', max: 100 },
        { name: '信息泄露防护', max: 100 }
      ],
      radius: '60%',
      axisName: {
        color: ink,
        fontSize: 12
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(0, 150, 136, 0.02)', 'rgba(0, 150, 136, 0.04)']
        }
      },
      axisLine: {
        lineStyle: { color: rule }
      },
      splitLine: {
        lineStyle: { color: rule }
      }
    },
    series: [{
      type: 'radar',
      data: [
        {
          value: [0, 0, 20, 0, 0, 30],
          name: '修复前',
          itemStyle: { color: danger },
          areaStyle: {
            color: danger,
            opacity: 0.15
          },
          lineStyle: {
            width: 2,
            color: danger
          }
        },
        {
          value: [90, 85, 95, 80, 90, 70],
          name: '修复后',
          itemStyle: { color: success },
          areaStyle: {
            color: success,
            opacity: 0.2
          },
          lineStyle: {
            width: 2,
            color: success
          }
        }
      ]
    }]
  });

  // ============ Chart 2: Revenue Funnel ============
  var funnelChart = echarts.init(document.getElementById('chart-funnel'), null, { renderer: 'svg' });
  funnelChart.setOption({
    animation: false,
    tooltip: {
      appendToBody: true,
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      show: false
    },
    series: [{
      type: 'funnel',
      left: '10%',
      top: 20,
      bottom: 20,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '20%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside',
        color: '#fff',
        fontSize: 13,
        fontWeight: 600,
        formatter: function(params) {
          return params.name + '\n' + params.value + '%';
        }
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 15
        }
      },
      data: [
        { value: 100, name: '流量层 (DAU)', itemStyle: { color: accent } },
        { value: 60, name: '参与层 (回访)', itemStyle: { color: accent2 } },
        { value: 25, name: '转化层 (点击)', itemStyle: { color: '#0891b2' } },
        { value: 8, name: '收入层 (佣金)', itemStyle: { color: '#0e7490' } },
        { value: 2, name: '订阅层 (付费)', itemStyle: { color: '#155e75' } }
      ]
    }]
  });

  // ============ Chart 3: Priority Matrix ============
  var priorityChart = echarts.init(document.getElementById('chart-priority'), null, { renderer: 'svg' });
  priorityChart.setOption({
    animation: false,
    tooltip: {
      appendToBody: true,
      formatter: function(params) {
        return '<strong>' + params.data.name + '</strong><br/>' +
               '启动难度：' + params.data.value[0] + '<br/>' +
               '收入潜力：' + params.data.value[1] + '<br/>' +
               '优先级：' + params.data.priority;
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '10%'
    },
    xAxis: {
      name: '启动难度（低→高）',
      nameTextStyle: { color: muted, fontSize: 12 },
      min: 0,
      max: 10,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, show: false },
      splitLine: {
        lineStyle: { color: rule, type: 'dashed' }
      }
    },
    yAxis: {
      name: '收入潜力（低→高）',
      nameTextStyle: { color: muted, fontSize: 12 },
      min: 0,
      max: 10,
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, show: false },
      splitLine: {
        lineStyle: { color: rule, type: 'dashed' }
      }
    },
    series: [
      {
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) * 12;
        },
        data: [
          {
            name: '联盟营销',
            value: [1.5, 4, 60],
            priority: '⭐⭐⭐⭐⭐ 最高',
            itemStyle: { color: success }
          },
          {
            name: '广告收入',
            value: [3, 5, 55],
            priority: '⭐⭐⭐⭐ 高',
            itemStyle: { color: accent }
          },
          {
            name: '付费内容订阅',
            value: [5, 7.5, 50],
            priority: '⭐⭐⭐⭐ 高',
            itemStyle: { color: accent2 }
          },
          {
            name: '知识付费课程',
            value: [7, 8.5, 45],
            priority: '⭐⭐⭐ 中',
            itemStyle: { color: warning }
          },
          {
            name: 'B端研究服务',
            value: [9, 9.5, 70],
            priority: '⭐⭐ 低（长期）',
            itemStyle: { color: danger }
          }
        ],
        label: {
          show: true,
          formatter: function(params) {
            return params.data.name;
          },
          position: 'top',
          color: ink,
          fontSize: 12,
          fontWeight: 600
        }
      },
      {
        type: 'line',
        markLine: {
          silent: true,
          symbol: 'none',
          lineStyle: {
            color: rule,
            type: 'dashed',
            width: 1
          },
          data: [
            { xAxis: 5, label: { show: false } }
          ]
        }
      }
    ]
  });

  // Resize handlers
  window.addEventListener('resize', function() {
    securityChart.resize();
    funnelChart.resize();
    priorityChart.resize();
  });
})();
