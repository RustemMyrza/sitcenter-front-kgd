<script setup>
import { defineProps, ref } from "vue";
// import ChartComponent from "./modal/ChartComponent.vue";

// import { sidebarWidth } from "@/components/sidebar/state";
const props = defineProps({
  info: Object,
  chart: Object,
  dynamicComponent: {
    type: Object,
    required: true,
  },
});
const showModal = ref(false);
const toggle = () => {
  showModal.value = !showModal.value;
};
// console.log(props.info.modalWidth)
</script>

<template>
  <div class="container" :style="{ backgroundColor: info.color }">
    <div v-if="showModal" class="modalBlack"></div>
    <div class="box flex">
      <div class="iconbox">
        <div class="icon">
          <i :class="props.info.icon"></i>
        </div>
        <div class="button text-white font-sans">
          <v-btn @click="toggle()" variant="outlined">
            <i class="fas fa-external-link-alt"></i>
          </v-btn>
        </div>
      </div>

      <div class="textbox">
        <div class="text text-white font-sans">
          <div class="amount text-white">
            <h1>{{ props.info.number }}</h1>
          </div>
          {{ props.info.text }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="chart" >
    <div class="close" @click="toggle()"><i class="fas fa-times"></i></div>
    <div class="header">
      <div class="title">{{props.chart.title}}</div>
    </div>
    <!-- <ChartComponent
      v-model:modelValue="showModal"
      :chartOptions="props.chart"
     /> -->
     <component :is="dynamicComponent" :chartOptions="props.chart" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0.5rem auto;
  border-radius: 1rem;
  box-shadow: 5px 8px 5px 0px rgba(0, 0, 0, 0.5);
  .box {
    .iconbox {
      padding: 0.5rem;
      border-right: 1px solid rgb(255, 255, 255);
    }
  }
  .modalBlack {
    position: absolute;
    overflow: hidden;
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
    padding: 1rem;
  }
}
.chart {
  position: absolute;
  z-index: 999;
  top: 10%;
  left: 30%;
  width: 50vw;
  background-color: white;
  overflow: hidden;
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
</style>
