<template>
  
    <!-- <div class="close" @click="updateParentValue(false)"><i class="fas fa-times"></i></div>
    <div class="header">
      <div class="title">{{chartOptions.title}}</div>
    </div> -->

    <div>
      <apexchart  :options="props.chartOptions.options" :series="props.chartOptions.series" />
    </div>
 
  <!-- <input type="text" :value="modelValue" @input="updateParentValue($event.target.value)" /> -->

  <!-- <v-btn @click="updateParentValue()">Close the window</v-btn> -->
</template>

<script setup>
// import { ref, watch, defineProps, defineEmits } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  chartOptions:Object
});

// const emits = defineEmits(['update:modelValue']);

// const childValue = ref(props.modelValue);

// watch(childValue, (newValue) => {
//   emits('update:modelValue', newValue);
// });

// const updateParentValue = (newValue) => {
//   childValue.value = newValue;
// };


// const series = [
//   {
//     name: "PRODUCT A",
//     data: [44, 55, 41, 67, 22, 43, 21, 49],
//   },
//   {
//     name: "PRODUCT B",
//     data: [13, 23, 20, 8, 13, 27, 33, 12],
//   },
//   {
//     name: "PRODUCT C",
//     data: [11, 17, 15, 15, 21, 14, 15, 13],
//   },
// ];
// const options = {
//   chart: {
//     type: "bar",
//     height: 350,
//     stacked: true,
//     stackType: "100%",
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         legend: {
//           position: "bottom",
//           offsetX: -10,
//           offsetY: 0,
//         },
//       },
//     },
//   ],
//   xaxis: {
//     categories: [
//       "2011 Q1",
//       "2011 Q2",
//       "2011 Q3",
//       "2011 Q4",
//       "2012 Q1",
//       "2012 Q2",
//       "2012 Q3",
//       "2012 Q4",
//     ],
//   },
//   fill: {
//     opacity: 1,
//   },
//   legend: {
//     position: "right",
//     offsetX: 0,
//     offsetY: 50,
//   },
// };
</script>


<!-- <style lang="scss" scoped>
.container {
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
</style> -->
