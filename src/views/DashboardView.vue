<script setup>
import { ref } from "vue";
// @ is an alias to /src
import BranchTicketsChart from "@/components/chart/branchTickets/BranchTicketsChart.vue";

import BlockElement from "@/components/analytics/BlockElement.vue";



import ChartComponent from "@/components/analytics/modal/ChartComponent.vue";
import ServerModal from "@/components/analytics/modal/ServerModal.vue";

const ServerModalBlock = ref({
    component:ServerModal,
    
});

const serverBlock = ref({
  component: ChartComponent,
  serverBlockInfo: {
    text: "Number of servers",
    number: 15,
    color: "green",
    icon: "fas fa-server",
    // modalWidth:"1000px"
  },
  serverChartInfo: {
    title: "Average service waiting",
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43, 21, 49],
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27, 33, 12],
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14, 15, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
      },
    },
  },
});

const markBlock = ref({
    component: ChartComponent,
  markBlockInfo: {
    text: "Number of servers",
    number: 545,
    color: "red",
    icon: "fas fa-wrench",
  },
  markBlockChart: {
    title: "asdaw",
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 280,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  },
});
</script>

<template>
  <div class="title">Главная страница</div>

  <div class="mainBlocks flex justify-around">
    <div class="block w-64">
      <BlockElement
        :dynamicComponent="serverBlock.component"
        :info="serverBlock.serverBlockInfo"
        :chart="serverBlock.serverChartInfo"
      />
    </div>
    <div class="block w-64">
      <BlockElement
         :dynamicComponent="markBlock.component"
        :info="markBlock.markBlockInfo"
        :chart="markBlock.markBlockChart"
      />
    </div>
   
  </div>
  <div class="branchTicketChart m-4">
    <BranchTicketsChart />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  padding: 2rem;
}
.branchTicketChart {
  width: 100%;
  height: 50%;
}
.block {
}
</style>
