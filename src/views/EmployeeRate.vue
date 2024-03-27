<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const branches = ref(null);

const childBranches = ref(0);
const selectedBranch = ref(0);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const chart = ref(null);

const employeeChart = ref({
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -60,
      formatter: function (value) {
            if (value % 10 === 1 && value % 100 !== 11) {
              return value + " час";
            } else if (
              value % 10 >= 2 &&
              value % 10 <= 4 &&
              (value % 100 < 10 || value % 100 >= 20)
            ) {
              return value + " часа";
            } else {
              return value + " часов";
            }
          }
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    yaxis: {
      labels: {
        maxWidth: 500,
      },
    },
  },
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
});

const getBranches = async () => {
  const result = await axios.get(`http://${host}:${port}/api/v1/branches`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  console.log(result);
  branches.value = result.data.rows;
};

const getEmployee = async () => {
  const result = await axios.get(
    `http://${host}:${port}/api/v1/employees/${selectedBranch.value}`,
    {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    }
  );
  console.log(result.data.data);


  const employeeData = result.data.data.map(function (employee) {
        return {
          name: employee.F_NAME,
          status: employee.timeDifference ? "Онлайн" : "Оффлайн",
          // photo: "https://static.vecteezy.com/system/resources/thumbnails/024/905/590/small/smiling-indian-girl-in-traditional-clothing-outdoors-generated-by-ai-free-photo.jpg",
          value: employee.timeDifference,
        };
      });
  const seriesData = employeeData.map(function (employee) {
        return {
          x: employee.name + " - " + employee.status,
          y: employee.value,
          // photo: employee.photo,
        };
      });


  chart.value.updateOptions({
    xaxis: {
      categories: seriesData.map(function (employee) {
            return employee.x;
          }),
    },
    series: [
      {
        name: "Показатели",
        data: seriesData,
        
      },
    ],
  });
};

onMounted(() => {
  getBranches();
});
</script>
<template>
  <div class="employee-container">
     <div class="mainBlock">
      <div class="inputBlock">
        <select class="form-select" v-model="childBranches">
          <option selected disabled value="0">Выберите филиал</option>
          <option v-for="br in branches" :key="br.id" :value="br">
            {{ br.F_NAME }}
          </option>
        </select>

        <select
          :disabled="!childBranches"
          class="form-select"
          v-model="selectedBranch"
          @change="getEmployee"
        >
          <option selected disabled value="0">Выберите отделение</option>
          <option
            v-for="child in childBranches.children"
            :key="child.F_ID"
            :value="child.F_ID"
          >
            {{ child.F_NAME }}
          </option>
        </select>
      </div>
      <div v-if="selectedBranch" class="employee-chart">
        <apexchart
          ref="chart"
          height="500"
          :options="employeeChart.options"
          :series="employeeChart.series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputBlock {
  padding: 0.5rem 2rem;
  select {
    margin: 1rem auto;
  }
}
</style>
