Highcharts.chart('hcContainer', {
    data: {
      googleSpreadsheetKey: '1gIERPwsHEAbLQT6JZi00nwCqtW8RiEcKEcAm0Z1A8cc',
      googleSpreadsheetWorksheet: 1
    },
    // Chart options
    chart: {
      type: 'pie'
    },
    // Colors
    // colors: Highcharts.getOptions().colors,
    // Chart Title and Subtitle
    title: {
      text: 'Sources of Inbound Students to Taiwan, 2015-2016'
    },
    // Credits
    credits: {
      enabled: true,
      href: 'https://ois.moe.gov.tw/fs/html/Statistics.html',
      text:
        'CSIS China Power Project | Source: "104大專校院境外學生人數統計" [ 2015 Foreign College and University Students Statistics (104 dazhuan xiaoyuan jingwai xuesheng renshu tongji)], Ministiry of Education, ROC (Taiwan)'
    },
    // Chart Legend
    legend: {
      align: 'right',
      verticalAlign: 'bottom',
      layout: 'vertical'
    },
    xAxis: {},
    // Y Axis
    yAxis: {
      title: {
        text: 'Millions'
      }
      // labels: {
      //   format: "${value}"
      // }
    },
    // Tooltip
    tooltip: {
      headerFormat:
        '<span style="font-size: 13px;text-align:center;margin-bottom: 5px;font-weight: bold;font-family: \'Roboto\', arial, sans-serif;">{point.key}</span><br/>',
      pointFormatter: function() {
        return `<span style="color:${this.color}">\u25CF </span>
               ${this.y.toFixed(2)}%`
      }
    },
    // Additional Plot Options
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: 25,
          style: {
            fontWeight: 'bold'
          }
        },
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '45%'],
        size: '90%'
      }
    },
    series: [
      {
        index: 0,
        innerSize: '70%'
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
            minWidth: 200
          },
          chartOptions: {
            plotOptions: {
              pie: {
                dataLabels: {
                  distance: -20
                }
              }
            }
          }
        }
      ]
    }
  })
