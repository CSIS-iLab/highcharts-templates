
Highcharts.chart('hcContainer', {
    // Load Data in from Google Sheets
    data: {
      googleSpreadsheetKey: '1yOToviEccwdpBfUhK6W133QtIKW6FHBy-r8F0eEPESg',
      googleSpreadsheetWorksheet: 1
    },
    // General Chart Options
    chart: {
      type: 'pie',
      width: 700
    },
    // Colors
    colors: ['#c42d17', '#83badc', '#3b75bb', '#0e6c6b', '#58a897', '#8cb561', '#f7d768', '#a483a8', '#69518d', '#845339', '#f58220', '#e18256', '#cbb097', '#808081'],
    // Chart Title and Subtitle
    title: {
      text: "Title"
    },
    tooltip: {
      valueSuffix: "%"
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text: "CSIS Project Name | Source: NAME"
    },
    // Chart Legend
    legend: {
      title: false,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    // Additional Plot Options
    plotOptions:
    {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    }
  })
