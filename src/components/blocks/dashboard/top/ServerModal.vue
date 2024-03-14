<template>
  
    <div class="server-container">
          <!-- {{ props.chartOptions }} -->
          <v-expansion-panels v-for="i in items" :key="i.id">
            <v-expansion-panel
            
              :title=i.F_NAME
              :text=i.F_ID   >
            </v-expansion-panel>
          </v-expansion-panels>
    </div>
 

</template>

<script setup>
// import { ref, watch, defineProps, defineEmits } from 'vue';
import { defineProps, onMounted, ref } from 'vue';

const props = defineProps({
  
  chartOptions:Object
  
});
const items = ref(props.chartOptions);

onMounted(()=>{
  console.log(props.chartOptions)
})

</script>



