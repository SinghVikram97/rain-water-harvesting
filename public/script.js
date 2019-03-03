window.executeHome = () => {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [
        {
          label: "Cost vs Tank",
          data: [23, 12, 6, 7, 12, 20, 22, 28],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 0, 0, 0.8);",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 0, 0, 0.8);",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Total Cost"
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Tanks"
            }
          }
        ]
      }
    }
  });
};
