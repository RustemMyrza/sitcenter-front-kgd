<script setup>
import { defineProps } from "vue";

import worker from "@/assets/worker.png";
import table from "@/assets/desktop.png";
import table_transparent from "@/assets/desktop.png";
import client from "@/assets/client.png";

// const isActive = ref(true);

const props = defineProps({

  tableNumber: {
    type: String,
    required: true
  },
  operatorName: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  inService: {
    type: Boolean,
    required: true,
  },
  clientInfo: {
    type: String,
    required: false,
  },
  isClientAlarm :{
    type:Boolean,
    required:false
  }

});

//:class="props.isActive === true ? 'alert' : 'inactive'"
</script>

<template>
  <div class="table">
    <div v-if="props.isActive" class="operator">
      <div class="operatorInfo text-sm">{{ props.operatorName }}</div>
      <img :src="props.isActive ? worker : 2" alt="" />
    </div>
    <div class="tableImg">
      <div class="tableImgInfo" :class="{ 'active': props.isActive }" :style="{ backgroundColor: props.isClientAlarm ? '#e02a1d': !props.isClientAlarm && props.isActive ? '#3ec72c': '#969190'  }">
        {{ props.tableNumber }}
      </div>
      <img :src="props.isActive ? table : table_transparent" alt="" />
    </div>
    <div v-if="props.inService" class="client">
      <div class="clientInfo text-sm">{{ props.clientInfo }}</div>
      <img :src="inService ? client : 2" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 25%;
  height: 25%;
  position: relative;
  margin: 5rem auto;
  
  font-weight: 700;
  

  .operator {
    position: absolute;
    top: 12%;
    left: 30%;
    width: 40%;

    .operatorInfo {
      width: auto;
      font-size: 0.7rem;
      position: absolute;
      top: -50%;
      left: 40%;
      z-index: 999;
      background-color: #ffffffc7;
      padding: .3rem ;
      border-radius: 1rem;
    }
  }

  .tableImg {
    position: absolute;
    left: 28%;
    top: 30%;
    width: 40%;
    z-index: 1;
    
    .tableImgInfo .active {
      animation: pulseAnimation 1.5s ease-in-out infinite alternate;
      /* Apply the animation */;
    }
    .tableImgInfo {
      

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-size: 1.2rem;
      left: -25%;
      top: -25%;
      width: 40%;
      height: 40%;
      border-radius: 50%;
      color: white;
      
     /* background-color: rgb(171, 171, 172);*/
      &.active {
        animation: pulseAnimation 1.5s ease-in-out infinite alternate;
        background-color: rgba(255, 255, 255, 0.842);
         background-position: center;
      }
    }

    .alert {
      color: white;
      background-color: rgb(238, 32, 32) !important;
      animation: pulse-animation 2s infinite;
    }
  }

  .client {
    position: absolute;
    left: 20%;
    top: 30%;
    width: 40%;
    z-index: 999;

    .clientInfo {
      position: absolute;
      font-size: 0.7rem;
      left: -50%;
      top: 80%;
      z-index: 999;
      background-color: rgba(255, 255, 255, 0.801);
      padding: .3rem ;
      border-radius: 1rem;
    }
  }
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.2);
  }
}
</style>
