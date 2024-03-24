<script setup>
// import axios from "axios";
import { onMounted, ref } from "vue";

// const peakHour = ref([]);

const pickHourObject = ref({
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
      type: "category",
      categories: [], // Initialize categories as an empty array
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },

  series: [
    {
      name: "Количество билетов",
      data: [],
    },
  ],
});

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
            :options="pickHourObject.options"
            :series="pickHourObject.series"
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
