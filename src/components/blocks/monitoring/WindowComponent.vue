<script setup>
import { defineProps } from "vue";

import worker from "@/assets/worker.png";
import table from "@/assets/table.png";
import table_transparent from "@/assets/table_transparent.png";
import client from "@/assets/client.png";

// const isActive = ref(true);

const props = defineProps({
 
    tableNumber:{
      type:String,
      required:true
    },
    operatorName: {
      type: String,
      required: true,
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
      type: Object,
      required: false,
    },
  
});

//:class="props.isActive === true ? 'alert' : 'inactive'"
</script>

<template>
  <div class="table">
    <div class="operator">
      <div class="operatorInfo">{{ props.operatorName }}</div>
      <img :src="props.isActive  ? worker : 2" alt="" />
    </div>
    <div class="tableImg">
      <div
        class="tableImgInfo"
        
      >
        {{ props.tableNumber }}
      </div>
      <img :src="props.isActive ? table : table_transparent" alt="" />
    </div>
    <div class="client">
      <div class="clientInfo">{{props.clientInfo}}</div>
      <img :src="inService ? client : 2" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table {
  width: 20%;
  height: 20%;
  position: relative;
  margin: 0.5rem auto;
  font-weight: 700;
  .operator {
    position: absolute;
    top: 12%;
    left: 20%;
    width: 40%;
    .operatorInfo {
      font-size: 0.8rem;

      position: absolute;
      top: -40%;
    }
  }
  .tableImg {
    position: absolute;
    left: 15%;
    top: 25%;
    width: 40%;
    z-index: 1;
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
      padding: 0.9rem;
      background-color: rgba(255, 255, 255, 0.733);
    }
    .alert {
      color: white;
      background-color: rgb(238, 32, 32) !important;
      animation: pulse-animation 2s infinite;
    }
  }
  .client {
    position: absolute;
    left: 10%;
    top: 30%;
    width: 40%;
    z-index: 999;
    .clientInfo {
      position: absolute;
      font-size: 0.8rem;
      left: -80%;
      top: 80%;
    }
  }
}
</style>
