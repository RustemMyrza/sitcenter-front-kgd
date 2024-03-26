<script setup>
import { onMounted, ref } from "vue";
import WindowComponent from "./WindowComponent.vue";
import WaitingComponent from "./WaitingComponent.vue";
import axios from "axios";
const branches = ref(null);
const childBranches = ref(0);
const selectedBranch = ref(0);


const windows = ref([]);

const getBranches = async()=>{
  const result = await axios.get(`http://localhost:3000/api/v1/branches`,{
    headers:{
      bearer:localStorage.getItem("authToken")
    }
  });
  console.log(result);
  branches.value = result.data.rows;
}

const getWindows = async()=>{
    console.log(selectedBranch.value);
    const result = await axios.get(`http://localhost:3000/api/v1/windows/${selectedBranch.value}`,{
    headers:{
      bearer:localStorage.getItem("authToken")
    }
  });
  console.log(result.data.windows);
  windows.value=result.data.windows;
}

onMounted(()=>{
  getBranches()
})


</script>

<template>
  <div class="mon-container">
    <div class="header">
      <h1>Мониторинг</h1>
    </div>
    <div class="inputBlock">
      <select class="form-select" v-model="childBranches" >
        <option selected disabled value="0">Выберите филиал</option>
        <option v-for="br in branches" :key="br.id" :value="br">{{br.F_NAME}}</option>
      </select>
      
      <select :disabled="!childBranches"  class="form-select" v-model="selectedBranch" @change="getWindows()">
        <option selected disabled value="0">Выберите отделение</option>
        <option v-for="child in childBranches.children" :key="child.F_ID" :value="child.F_ID">
          {{ child.F_NAME }}
        </option>
      
      </select>
    </div>
    <div class="live">
        <div class="indicators flex ">
            <div class="clientIndicator m-2 w-full">
                <div class="inserviceClient p-2">
                    <h5>Количество обслуживающихся клиентов: 44</h5>
                </div>
                <div class="waitClient p-2">
                    <h5>Количество ожидающих клиентов: 44</h5>
                </div>
            </div>
            <div class="operatorIndicator m-2 w-full">
                <div class="onlineOperator p-2">
                    <h5>Количество операторов в сети: 45</h5>
                </div>
                <div class="offlineOperator p-2">
                    <h5>Количество операторов вне сети: 66</h5>
                </div>
            </div>
        </div>
        <div v-if="branches" class="windows">
          <div class="waits">
               <WaitingComponent/>
                
          </div>
          <div class="tables">
            <WindowComponent v-for="window in windows" :key="window.id" :table-number="window.winno"
            :operator-name="window.name" :is-active="(window.operatorId === 0) ? false : true"
            :in-service="window.INSERVICE.length !== 0"
            :client-info="(window.INSERVICE.length !== 0)? window.INSERVICE[0].servicename: null" />
           
          </div>
        </div>


    </div>
  </div>
</template>

<style lang="scss" scoped>
.mon-container {
  width: 100%;
  height: 70vh;

  .inputBlock {
    padding: .5rem 2rem;
    select {
      margin: 1rem auto;
    }
  }

  .live {
   
    background: url("../../../assets/back.png");
    width: 100%;
    height: 100%;
    .indicators{
        height: fit-content;
        background-color:rgba(44, 44, 44, 0.308);

        .operatorIndicator{
            border-left: 2px solid white;
        }
        h5{
            font-weight: 600;
            color: white;
        }
    }
    .windows{
        padding: 1rem;
        position: relative;
        width: 100%;
        height: 80%;
        display: flex;
        .waits{
            width: 30%;
            height: 100%;
            background-color: rgba(235, 236, 229, 0.308);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            
            padding: 1rem;
            
        }
        .tables{
            overflow-y:scroll;
            width: 70%;
            height: 100%;
            
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem;
           
        }

    }
  }
  @keyframes pulse-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
