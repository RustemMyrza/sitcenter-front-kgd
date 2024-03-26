<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const isChild = ref(false);

const search = ref("");
const headers = [
  {
    align: "start",
    key: "iin",
    sortable: false,
    title: "ИИН",
  },
  { key: "ticketno", title: "Номер билета" },
  { key: "servicename", title: "Название услуги" },
  { key: "idbranch", title: "Отделение" },
  { key: "operator", title: "Оператор" },
  { key: "starttime", title: "Время регистрации" },
  // { key: "waittime", title: "Время ожидания" },
  { key: "startservtime", title: "Время обслуживания" },
];
const desserts = ref([]);
const parentList = ref([]);

const branchTickets = ref([]);
const series = ref([]);
const categories = ref([]);

const chartOptions = ref({
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
    events: {
      legendClick: function (chartContext, seriesIndex, config) {
        console.log(chartContext, seriesIndex, config);
      },
    },
    // events: {
    //   dataPointSelection: function(event, chartContext, config) {
    //     console.log(event,chartContext,config)
    //   },
    //   legendClick: function(chartContext, seriesIndex, config) {
    //     console.log(seriesIndex,chartContext,config)
    //   }
    // },
  },

  colors: ["#2ecc71", "#3498db", "#f39c12", "#d35400", "#c0392b"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "top",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "string",
    categories: categories.value,
    // categories: ["<a href='/tickets'> 1991</a>", 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
  legend: {
    position: "top",
    offsetY: 40,
  },
  fill: {
    opacity: 1,
  },
});

const apexChart = ref(null);

const updateChartByBranchId = async (branch) => {
  categories.value = branch.children.map((e) => e.branchName);

  series.value = [
    {
      name: "Обслуженные",
      data: branch.children.map((item) => item.stateTickets.COMPLETED),
    },
    {
      name: "Обслуживающиеся",
      data: branch.children.map((item) => item.stateTickets.INSERVICE),
    },
    {
      name: "Ожидающие",
      data: branch.children.map((item) => item.stateTickets.NEW),
    },
    {
      name: "Не подошедшие",
      data: branch.children.map((item) => item.stateTickets.MISSED),
    },
    {
      name: "Alarm",
      data: branch.children.map((item) => item.stateTickets.ALARM),
    },
  ];
  updateChart();
};

const updateTicketByBranchId = async (branch) => {
  try {
    const list = await axios.get(
      `http://localhost:3000/api/v1/tickets/list/${branch.branchId}`,
      {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      }
    );
    desserts.value = list.data.data.tickets;

    console.log(list);
  } catch (err) {
    console.log(err);
  }
};



const handleBarClick = async (event, chartContext, config) => {
  const point = config.dataPointIndex;
  const branch = branchTickets.value[point];
  // console.log(branch);
  if (branch.children && !isChild.value) {
    updateChartByBranchId(branch);
    isChild.value = true;
    updateTicketByBranchId(branch);
  }

  // Add your custom logic here for handling bar clicks
};

const updateChart = () => {
  apexChart.value.updateOptions({
    xaxis: {
      categories: categories.value,
    },
    series: [
      {
        data: series.value,
      },
    ],
  });
};
const backChart = () => {
  try {
    categories.value = branchTickets.value.map((e) => e.branchName);
    series.value = [
      {
        name: "Обслуженные",
        data: branchTickets.value.map((item) => item.stateTickets.COMPLETED),
      },
      {
        name: "Обслуживающиеся",
        data: branchTickets.value.map((item) => item.stateTickets.INSERVICE),
      },
      {
        name: "Ожидающие",
        data: branchTickets.value.map((item) => item.stateTickets.NEW),
      },
      {
        name: "Не подошедшие",
        data: branchTickets.value.map((item) => item.stateTickets.MISSED),
      },
      {
        name: "Alarm",
        data: branchTickets.value.map((item) => item.stateTickets.ALARM),
      },
    ];
    isChild.value = false;
    updateChart();
    desserts.value = parentList.value;
  } catch (err) {
    alert(err);
  }
};

const getBranchTickets = async () => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/v1/tickets/branch-tickets`,
      {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      }
    );
    branchTickets.value = result.data.data;
    // console.log(branchTickets.value);
    if(route.query.branch_id){
        const propBranch = branchTickets.value.find(e=>e.branchId == route.query.branch_id);
        console.log(propBranch);
        updateChartByBranchId(propBranch);
        updateTicketByBranchId(propBranch);
    }
    else
    backChart();
  } catch (err) {
    console.log(err);
  }
};

const getTicketList = async () => {
  try {
    const result = await axios.get(
      `http://localhost:3000/api/v1/tickets/list`,
      {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      }
    );
    // console.log(result.data.data.tickets);
    parentList.value = result.data.data.tickets;
    desserts.value = result.data.data.tickets;
  } catch (err) {
    console.log(err);
  }
  // console.log(desserts);
};

onMounted(() => {
  getBranchTickets();
  getTicketList();
  // console.log(route.query.branch_id);
  // if(route.query.branch_id){
  //   updateByProps(route.query.branch_id);
  // }
  
  // console.log(apexChart.value)
});
</script>


<template>
  <div class="amount-container">
    <div class="chartBlock">
      <v-btn @click="backChart()" v-if="isChild" class="back"
        ><i class="fas fa-arrow-left fa-2xl"></i
      ></v-btn>
      <apexchart
        ref="apexChart"
        type="bar"
        height="500"
        :options="chartOptions"
        :series="series"
        @dataPointSelection="handleBarClick"
      ></apexchart>
    </div>
    <div class="tickets">
      <v-card title="Билеты" flat>
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </template>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chartBlock {
  width: 100%;
  .back {
    border-radius: 1rem;
  }
}
</style>
