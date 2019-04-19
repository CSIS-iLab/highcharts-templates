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
      text: 'Interactive Title'
    },
    // Credits
    credits: {
      enabled: true,
      href: false,
      text:
        'CSIS Project Name : Source: NAME'
    },
    // Chart Legend
    // legend: {
    //   align: 'center',
    //   verticalAlign: 'bottom',
    //   layout: 'horizontal'
    // },
    // Y Axis
    yAxis: {
      title: {
        text: 'Y Axis Title'
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
  })
