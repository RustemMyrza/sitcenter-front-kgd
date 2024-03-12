<script setup>
import { defineProps, ref } from "vue";

// import { sidebarWidth } from "@/components/sidebar/state";



const series = [
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
];
const options = {
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
};
const props = defineProps(["number"]);
const showModal = ref(false);
const toggle = () => {
  showModal.value = !showModal.value;
};
</script>


<template>
  <div class="container bg-green-500">
    <div v-if="showModal" class="modalBlack"></div>
    <div class="box flex">
      <div class="iconbox">
      <div class="icon">
        <i class="fas fa-server"></i>
      </div>
      <div class="button text-white font-sans">
        <v-btn @click="toggle()" variant="outlined"> <i class="fas fa-external-link-alt"></i> </v-btn>
      </div>
    </div>
    
    <div class="textbox">
      <div class="text text-white font-sans">
        <div class="amount text-white">
          <h1>{{ props.number }}</h1>
        </div>
        Количество УГД, с которыми нет связи
      </div>
      
    </div>
  </div>
    <div v-if="showModal" class="chart">
      <div class="close" @click="toggle()"><i class="fas fa-times"></i></div>
      <div class="header">
        <div class="title">Среднее время обслуживания</div>
      </div>

      <div>
        <apexchart type="bar" :options="options" :series="series" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0.5rem auto;
  border-radius: 1rem;
  box-shadow: 5px 8px 5px 0px rgba(0, 0, 0, 0.5);
  .box{
    .iconbox{
      padding: 0.5rem;
      border-right: 1px solid rgb(255, 255, 255);
   
    }
  }
  .modalBlack {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 997;
    background-color: rgba(0, 0, 0, 0.531);
  }
  .icon {
    width: 100%;
    font-size: 50px;
    font-weight: bold;
     color: white;
  }
  .amount {
    width: 100%;
    padding: 0.5rem;
    font-size: 30px;
    font-weight: bold;
   
  }
  .text {
    padding: 0.5rem;
     
  }
  
  .chart {
    background-color: white;
    position: absolute;
    z-index: 999;
    top: 10%;
    left: 25%;
    width: 60%;
    padding: 1rem 2rem;
    border-left: 1px solid rgb(0, 0, 0);
    border-top: 1px solid black;
    box-shadow: 5px 8px 5px 0px rgba(0, 0, 0, 0.5);
    .close {
      font-size: 24px;
      float: right;
      cursor: pointer;
    }
    .header {
      padding: 1rem;
    }
  }
}
</style>