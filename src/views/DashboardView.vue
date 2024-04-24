<script setup>
import axios from "axios";
import { onMounted, ref,watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const peakChart = ref(null);
const avgChart = ref(null);
const rateChart = ref(null);
const serviceChart = ref(null);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

// const pickHours = ref({
//   options: {
//     chart: {
//       height: 350,
//       type: "area",
//       zoom: {
//         enabled: true,
//       },
//       toolbar: {
//         show: true,
//         tools: {
//           download: true,
//           selection: true,
//           zoom: true,
//           zoomin: true,
//           zoomout: true,
//           pan: true,
//           reset: true,
//         }
//       }
      
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "straight",
//     },
//     markers: {
//       size: 6,
//       hover: {
//         size: 8,
//       },
//     },
//     title: {
//       text: "",
//       align: "left",
//     },
//     grid: {
//       row: {
//         colors: ["#f3f3f3", "transparent"],
//         opacity: 0.5,
//       },
//     },

//     yaxis: [
//       {
//         axisTicks: {
//           show: true,
//         },
//         axisBorder: {
//           show: true,
//           color: "#FF5733",
//         },
//         labels: {
//           style: {
//             colors: "#FF5733",
//           },
//         },
//         title: {
//           text: "Количество билетов",
//           style: {
//             color: "#FF5733",
//           },
//         },
//       },
//     ],
//     xaxis: {
//       type: "datetime",
//       categories: [
//         "2018-09-19T00:00:00.000Z",
//         "2018-09-19T01:30:00.000Z",
//         "2018-09-19T02:30:00.000Z",
//         "2018-09-19T03:30:00.000Z",
//         "2018-09-19T04:30:00.000Z",
//         "2018-09-19T05:30:00.000Z",
//         "2018-09-19T06:30:00.000Z",
//       ],
//     },
//     tooltip: {
//       x: {
//         format: "dd/MM/yy HH:mm",
//       },
//     },
//   },
//   series: [
//     {
//       name: "series1",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//   ],
// });

const pickHours = ref({
  options: {
    chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      markers: {
        size: 6,
        hover: {
          size: 8,
        },
      },
      title: {
        text: "",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "category",
        // categories: ["8:40", "9:00", "9:20", "9:40", "10:00"],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FF5733",
          },
          labels: {
            style: {
              colors: "#FF5733",
            },
          },
          title: {
            text: "Среднее время обслуживания и ожидания",
            style: {
              color: "#FF5733",
            },
          },
        },
      ],
      
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
});

const avg = ref({
  options: {
    chart: {
        height: 350,
        type: "area",
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      markers: {
        size: 6,
        hover: {
          size: 8,
        },
      },
      title: {
        text: "",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "category",
        // categories: ["8:40", "9:00", "9:20", "9:40", "10:00"],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#FF5733",
          },
          labels: {
            style: {
              colors: "#FF5733",
            },
          },
          title: {
            text: "Среднее время обслуживания и ожидания",
            style: {
              color: "#FF5733",
            },
          },
        },
      ],
      
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
});

const rate = ref({
  options: {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            // formatter: function (w) {
            //   // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            //   return 249;
            // },
          },
          legend: {
            show: true,
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  },
  series: [44, 55, 67, 83],
});

const service = ref({
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
  series: [44, 55, 13, 43, 22],
});

const fetchDognutData = async () => {
  let url = `http://${host}:${port}/api/v1/tickets/all`;
  if(route.query.branch_id) url = `http://${host}:${port}/api/v1/tickets/all/${route.query.branch_id}`
  try {
    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    const ratingTickets = result.data.data.rating;
    // console.log(ratingTickets)
     let branchRating = ratingTickets.map((item) => item.tickets);
    let allRatingTickets = branchRating.map((item) => item.PERFECT + item.BAD);

    // Создаем массив объектов с именами и значениями
    let ratingWithNames = ratingTickets.map((item, index) => ({
      name: item.name,
      value: allRatingTickets[index],
    }));

    // Сортируем массив объектов по убыванию значения
    let sortedRating = ratingWithNames.sort((a, b) => b.value - a.value);

    // Выбираем верхние 5 элементов
    let top5Rating = sortedRating.slice(0, 5);

    // Задаем значения progress bar вручную
    // Задаем значения progress bar вручную
    let seriesValues = top5Rating.map((item) => item.value);

    // Сумма всех значений
    const totalValue = sortedRating.reduce((sum, item) => sum + item.value, 0);
    
    rateChart.value.updateOptions({
      series: seriesValues.map((value) =>
        ((value / totalValue) * 100).toFixed(1),
      ),
      chart: {
        type: "radialBar",
        size: 200,
        height: 276,
        offsetY: 0,
      },
      labels: top5Rating.map((item) => item.name),
      colors: ["#0d6efd", "#d63384", "#28a745", "#ffc107", "#dc3545"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              offsetY: 125,
              fontSize: "22px",
            },
            value: {
              offsetY: -10,
              color: "#111",
              fontSize: "36px",
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: true,
              label: "Общее количество оценок",
              formatter: function () {
                return totalValue; // или формат, который вам нужен
              },
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: undefined,
          options: {
            chart: {
              offsetY: 0,
            },
          },
        },
      ],
    });



    const serviceTickets = result.data.data.serviceTickets.data;
    // console.log(serviceTickets)
    const MAX_LABEL_LENGTH = 6;
    const legend2 = serviceTickets.map((item) => {
      const truncatedLabel =
        item.servicename.length > MAX_LABEL_LENGTH
          ? item.servicename.slice(0, MAX_LABEL_LENGTH) + "..."
          : item.servicename;

      return truncatedLabel;
    });

    serviceChart.value.updateOptions({
      series: serviceTickets.map((item) => item.length),
      chart: {
        type: "donut",
      },
      labels: serviceTickets.map((item) => item.servicename),

      dataLabels: {
        enabled: true,
      },
      colors: [
        "#0d6efd",
        "#20c997",
        "#ffc107",
        "#d63384",
        "#6f42c1",
        "#adb5bd",
      ],
      title: {
        // text: totalSum,
        align: "center",
        offsetX: 0,
        offsetY: 85,
        floating: true,
        style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#263238",
        },
      },
      yaxis: {
        show: false,
      },
      legend: {
        formatter: function (seriesName, opts) {
          const index = opts.seriesIndex;
          return [legend2[index], " - ", opts.w.globals.series[index]];
        },
        position: "top",
        horizontalAlign: "center",
      },
      pie: {
        expandOnClick: false,
      },
      events: {
        markerClick: function (
          event,
          chartContext,
          { seriesIndex, dataPointIndex },
        ) {
          console.log("Clicked on datalabel:", seriesIndex, dataPointIndex);
        },
      },
      responsive: [
        {
          breakpoint: undefined,
          options: {
            chart: {
              offsetY: 0,
            },
          },
        },
      ],
    })
   
  } catch (err) {
    console.log(err);
  }
};

const fetchData = async () => {
  let url = `http://${host}:${port}/api/v1/analytics`;
  if(route.query.branch_id) url = `http://${host}:${port}/api/v1/analytics/${route.query.branch_id}`;
  
  try {
    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    // console.log(result.data);
    let allClientData = result.data.data.peakHours.map((item) => {
      return {
        x: item.time,
        y: item.count,
        // operators: item.operators,
        long_wait: item.WAITOVER,
        long_service: item.SERVOVER,
        bad_grades: item.BAD,
      };
    });


    peakChart.value.updateOptions({
     
      xaxis: {
        type: "category",
        categories: allClientData.map((point) => point.x),
        tickPlacement: 'on',
        
      },
      series: [
        {
          name: "Количество билетов",
          data: allClientData,
        },
      ],
      tooltip: {
        custom: function ({ series, dataPointIndex }) {
          var point = allClientData[dataPointIndex];
          return `<div class="tooltip-container">
            <div class="tooltip-content">
              <span class="tooltip-label">Количество билетов:</span>
              <span class="tooltip-value">${series[0][dataPointIndex]}</span>
            </div>
            <div class="tooltip-content">
              <span class="tooltip-label">Время:</span>
              <span class="tooltip-value">${point.x}</span>
            </div>
           
            <div class="tooltip-content">
              <span class="tooltip-label">Долгое ожидание:</span>
              <span class="tooltip-value">${point.long_wait}</span>
            </div>
            <div class="tooltip-content">
              <span class="tooltip-label">Долгое обслуживание:</span>
              <span class="tooltip-value">${point.long_service}</span>
            </div>
            <div class="tooltip-content">
              <span class="tooltip-label">Плохие оценки:</span>
              <span class="tooltip-value">${point.bad_grades}</span>
            </div>
           
          </div>`;
        },
      },
    });

    const avgServHours = result.data.data.averageServ;
    const avgWaitHours = result.data.data.averageWait;
    let timeChartData = avgServHours.map((item) => {
      return {
        x: item.time,
        y: item.count,
      };
    });

    avgChart.value.updateOptions({
      series: [
        {
          name: "Среднее время обслуживания",
          data: timeChartData,
        },
        {
          name: "Среднее время ожидания",
          data: avgWaitHours.map((item) => {
            // console.log('Avg wait hours',item)
            return {
              x: item.time,
              y: item.count,
            };
          }),
        },
      ],
      tooltip: {
        custom: function ({ series, dataPointIndex, w }) {
          w
          var point = timeChartData[dataPointIndex];
          var tooltipContent = `<div class="tooltip-container">
        <div class="tooltip-content">
          <span class="tooltip-label">Время:</span>
          <span class="tooltip-value">${point.x}</span>
        </div>`;

          // Check if average service time is defined
          if (series[0][dataPointIndex] !== undefined) {
            tooltipContent += `<div class="tooltip-content">
          <span class="tooltip-label">Среднее время обслуживания:</span>
          <span class="tooltip-value">${series[0][dataPointIndex]} мин</span>
        </div>`;
          }

          // Check if average waiting time is defined
          if (series[1][dataPointIndex] !== undefined) {
            tooltipContent += `<div class="tooltip-content">
          <span class="tooltip-label">Среднее время ожидания:</span>
          <span class="tooltip-value">${series[1][dataPointIndex]} мин</span>
        </div>`;
          }

          tooltipContent += `</div>`;
          return tooltipContent;
        },
      },
      
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
watch(() => route.query, () => {
  fetchData();
  fetchDognutData();
});

onMounted(() => {
  fetchData();
  fetchDognutData();
});

// Watch for changes in peakHour.value and update pickHourObject options accordingly
// watch(peakHour, (newValue) => {
//   pickHourObject.value.options.xaxis.categories = newValue.map((point) => point.x);
//   pickHourObject.value.series[0].data = newValue;
// });
</script>

<template>
  <main>
    <div class="mainBlock flex">
      <div class="leftBlock">
        <div class="pickHours">
          <apexchart
            ref="peakChart"
            :height="300"
            :options="pickHours.options"
            :series="pickHours.series"
          ></apexchart>
        </div>
        <div class="avg">
          <apexchart
            ref="avgChart"
            :height="300"
            :options="avg.options"
            :series="avg.series"
          ></apexchart>
        </div>
      </div>
      <div class="rightBlock">
        <div class="rate">
          <apexchart
            ref="rateChart"
            :height="300"
            :options="rate.options"
            :series="rate.series"
          ></apexchart>
        </div>
        <div class="services">
          <apexchart
            ref="serviceChart"
            :height="350"
            :options="service.options"
            :series="service.series"
          ></apexchart>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
}
.title {
  font-size: 24px;
  padding: 0.5rem;
}
.mainBlock {
  .leftBlock {
    width: 70%;
    height: 100%;
    .pickHours {
    }
  }
  .rightBlock {
    width: 30%;
    display: grid;
    place-items: centered;
  }
}
</style>
