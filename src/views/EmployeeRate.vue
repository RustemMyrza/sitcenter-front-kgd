<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const branches = ref(null);

const childBranches = ref(0);
const selectedBranch = ref(0);



const headers = [
  {
    align: 'center',
    key: 'F_BRANCH_ID',
    sortable: false,
    title: 'ID отделения',
  },
  { key: 'F_DESCR', title: 'Описание', align: 'center', },
  { key: 'F_ID', title: 'ID оператора', align: 'center', },
  { key: 'F_NAME', title: 'Ф.И.О', align: 'center', },
  // { key: 's', title: 'Ф.И.О', align: 'center', },
  { key: 'timeDifference', title: 'Время', align: 'center', },
  { key: 'startTime', title: 'Время начала работы', align: 'center', },
];
const desserts = ref([]);

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
        return formatTime(value);
        // if (value % 10 === 1 && value % 100 !== 11) {
        //   return value + " час";
        // } else if (
        //   value % 10 >= 2 &&
        //   value % 10 <= 4 &&
        //   (value % 100 < 10 || value % 100 >= 20)
        // ) {
        //   return value + " часа";
        // } else {
        //   return value + " часов";
        // }
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
  desserts.value = result.data.data;
  console.log("Desserts", desserts.value)


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


const formatTime = (milliseconds) => {
  const hours = Math.floor(milliseconds / 3600000);
  const minutes = Math.floor((milliseconds % 3600000) / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${hours}ч. ${minutes}м. ${seconds}сек.`;

};
const downloadCSV = () => {
  // Convert items to CSV format
  try {
    const excel = desserts.value.map(ticket => {
      const start = ticket.startTime * 1;
      return {
        'ID отделения': ticket.F_BRANCH_ID,
        'Описание': ticket.F_DESCR,
        'ID оператора': ticket.F_ID,
        'Ф.И.О': ticket.F_NAME,
        'Время': formatTime(ticket.timeDifference),
        'Время начала работы': ticket.timeDifference !== 0 ? new Date(start).toLocaleString("ru-RU") : "Оффлайн"
     }
    });
    // console.log(excel);
    const csvContent = convertToCSV(excel);

    // Create a Blob object with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.csv';

    // Trigger the download
    link.click();
  } catch (err) {
    console.log(err);
  }

}

const convertToCSV = (items) => {
  const header = Object.keys(items[0]).join(',');
  const rows = items.map(item => Object.values(item).join(','));
  return `${header}\n${rows.join('\n')}`;
}
const formattedDesserts = computed(() => {
  return desserts.value.map(ticket => {
    const start = ticket.startTime * 1;
    return {
      ...ticket,
      timeDifference: formatTime(ticket.timeDifference),
      startTime: ticket.timeDifference !== 0 ? new Date(start).toLocaleString("ru-RU") : "Оффлайн"
    }
  }).sort((a, b) => {
    return a.starttime - b.starttime;
  });
});

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

        <select :disabled="!childBranches" class="form-select" v-model="selectedBranch" @change="getEmployee">
          <option selected disabled value="0">Выберите отделение</option>
          <option v-for="child in childBranches.children" :key="child.F_ID" :value="child.F_ID">
            {{ child.F_NAME }}
          </option>
        </select>
      </div>
      <div v-if="selectedBranch" class="employee-chart">
        <apexchart ref="chart" height="800" :options="employeeChart.options" :series="employeeChart.series"></apexchart>
      </div>

      <div class="empl-data">
        <v-btn v-if="selectedBranch" class="m-2" @click="downloadCSV()">Скачать</v-btn>
        <v-card title="Окна" flat>
          <template v-slot:text>
            <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
              hide-details single-line></v-text-field>
          </template>

          <v-data-table :headers="headers" :items="formattedDesserts" :search="search"></v-data-table>
        </v-card>
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
