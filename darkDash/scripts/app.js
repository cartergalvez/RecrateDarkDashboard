// var chart = bb.generate({
//     data: {
//       columns: [
//       ["data1", 40],
//       ["data2", 120]
//       ],
//       type: "pie", // for ESM specify as: pie()'
//       onclick: function(d, i) {
//       console.log("onclick", d, i);
//      },
//       onover: function(d, i) {
//       console.log("onover", d, i);
//      },
//       onout: function(d, i) {
//       console.log("onout", d, i);
//      } 
//     },
//     bindto: "#pieChart"
//   });
  
    var chart1 = bb.generate({
      data: {
        columns: [
        ["data1", 300, 350, 300, 50, 150, 50],
        ["data2", 0, 200, 160, 50, 250, 300]
        ],
        types: {
          data1: "spline", // for ESM specify as: area()
          data2: "spline", // for ESM specify as: areaSpline()
        }
      },
      bindto: "#mainChart"
    });

    var chart2 = bb.generate({
        data: {
          columns: [
          ["data1", 300, 350, 300, 50, 150, 50],
          ["data2", 0, 200, 160, 50, 250, 300]
          ],
          types: {
            data1: "spline", // for ESM specify as: area()
            data2: "spline", // for ESM specify as: areaSpline()
          }
        },
        bindto: "#subLineChart"
      });

      var chart3 = bb.generate({
        data: {
          columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ],
          type: "bar", // for ESM specify as: bar()
        },
        bar: {
          width: {
            ratio: .8
          }
        },
        bindto: "#barChart_1"
      });

      var chart4 = bb.generate({
        data: {
          columns: [
          ["data1", 300, 350, 300, 50, 150, 50],
          ["data2", 0, 200, 160, 50, 250, 300]
          ],
          types: {
            data1: "spline", // for ESM specify as: area()
            data2: "spline", // for ESM specify as: areaSpline()
          }
        },
        bindto: "#subLineChart2"
      });
  
  
    // var chart3 = bb.generate({
    //   data: {
    //     columns: [
    //     ["data1", 30, 200, 100, 400, 150, 250],
    //     ["data2", 50, 20, 10, 40, 15, 25]
    //     ],
    //     type: "line", // for ESM specify as: line()
    //   },
    //   bindto: "#lineChart"
    // });
  
    