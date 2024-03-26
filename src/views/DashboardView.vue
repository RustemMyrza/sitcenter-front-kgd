<script setup>
// import axios from "axios";
import { onMounted, ref } from "vue";

const pickHours = {
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
};
const avg = {
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
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
};
const rateChart = {
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
          legend:{
            show:true
          }
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
  },
  series: [44, 55, 67, 83],
};
const serviceChart = {
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
};

// const fetchData = async () => {
//   try {
//     const result = await axios.get(`http://localhost:3000/api/v1/analytics`, {
//       headers: {
//         bearer: localStorage.getItem("authToken"),
//       },
//     });

//     const object = result.data.data.peakHours.map((item) => {
//       return {
//         x: item.time,
//         y: item.count,
//       };
//     });
//     console.log(object);

//     // Update pickHourObject options once peakHour.value is updated
//     pickHourObject.value.options.xaxis.categories = object.map((point) => point.x);
//     pickHourObject.value.series[0].data = object;

//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

onMounted(() => {
  // fetchData();
});

// Watch for changes in peakHour.value and update pickHourObject options accordingly
// watch(peakHour, (newValue) => {
//   pickHourObject.value.options.xaxis.categories = newValue.map((point) => point.x);
//   pickHourObject.value.series[0].data = newValue;
// });
</script>

<template>
  <main>
    <div class="title"><h3>Временные показатели</h3></div>

    <div class="mainBlock flex">
      <div class="leftBlock">
        <div class="pickHours">
          <apexchart
            :height="300"
            :options="pickHours.options"
            :series="pickHours.series"
          ></apexchart>
        </div>
        <div class="avg">
          <apexchart
            :height="300"
            :options="avg.options"
            :series="avg.series"
          ></apexchart>
        </div>
      </div>
      <div class="rightBlock">
        <div class="rate">
          <apexchart
            :height="300"
            :options="rateChart.options"
            :series="rateChart.series"
          ></apexchart>
        </div>
        <div class="services">
          <apexchart
            :height="250"
            :options="serviceChart.options"
            :series="serviceChart.series"
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
  }
}
</style>
