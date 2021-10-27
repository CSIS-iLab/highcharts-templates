$(function() {
  var data = {};
  var titles = [];
  var sets = [];
  
  // Load Data in from Google Sheets
  Highcharts.data({
    googleAPIKey: 'AIzaSyBXuQRRw4K4W8E4eGHoSFUSrK-ZwpD4Zz4',
    googleSpreadsheetKey: "1ih7-pyIE57y3b3P1cj_MbEBaQcw-jdj08b4GrZjnsRM",
    googleSpreadsheetRange: "Sheet1",
    switchRowsAndColumns: true,
    parsed: function(columns) {
      // Format the data here
      console.log(columns);
      let items = []
      // Grab the column title
      titles = [...columns[0]] 
      columns.forEach( (item, x) => {
        item.forEach( value => items.push(value))
      })
      console.log(titles);
      
      
      // items.forEach(function (x) { sets[x] = (sets[x] || 0) + 1; });//counts duplicates elements in array
      // console.log(sets);

      renderChart( data );
    }
  })

  function renderChart( data ) {
    Highcharts.chart('hcContainer',{
      // General Chart Options
      chart: {
        type: 'venn'
      },
      // Chart Title and Subtitle
      title: {
        text: 'Venn Chart'
      },
      subtitle: {
        text: 'I am the Subtitle'
      },
      // Credits
      credits: {
        enabled: true,
        href: false,
        text:
          'CSIS Project Name : Source: NAME'
      },
      series: [
        {
          type: 'venn',
          name: 'Testing the Venn Chart',
          data: [
            {
              name: 'TB/HIV',
              sets: ['A'],
              value: 2,
            }, {
              name: 'MDR-TB',
              sets: ['B'],
              value: 2,
            }, {
              name: 'TB',
              sets: ['C'],
              value: 2,
            }, {
              sets: ['A','B'],
              value: 1,
              name: 'TB/HIV - MDR-TB',
            }, {
              sets: ['A','C'],
              value: 1,
              name: 'TB/HIV'
            }, {
              sets: ['B','C'],
              value: 1,
              name: 'MDR-TB'
            }, {
              sets: ['A', 'B', 'C'],
              value: 1,
              name: 'All'
            }
          ]
        }
      ],
      accessibility: {
        point: {
          descriptionFormatter: function (point) {
            var intersection = point.sets.join(', '),
                name = point.name,
                ix = point.index + 1,
                val = point.value;
            return ix + '. Intersection: ' + intersection + '. ' +
                (point.sets.length > 1 ? name + '. ' : '') + 'Value ' + val + '.';
          }
        }
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
        pointFormat: '<tr><td style="color: {series.color}">Countries: </td>' +
            '<td style="text-align: right"><b>{point.sets}</b></td></tr>',
        footerFormat: '</table>',
      }
    })
  }
})
