<script setup>
import { ref } from "vue";

//monitoring images


//monitoring images

import WindowComponent from "./WindowComponent.vue";
import WaitingComponent from "./WaitingComponent.vue";

const infoObject = ref({
  windows: [
    {
      winno: "1",
      operatorId: 0,
      active: false,
      worktitle: "3002 Прием+Выдача+Налог (Земля, Имущество, Транспорт) + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "2",
      operatorId: 0,
      active: false,
      worktitle: "2002 Прием + Выдача + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "3",
      operatorId: 0,
      active: false,
      worktitle: "2001 Прием + Выдача + Банкротство + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "4",
      operatorId: 0,
      active: false,
      worktitle: "2002 Прием + Выдача + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "5",
      operatorId: 0,
      active: false,
      worktitle: "2002 Прием + Выдача + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "6",
      operatorId: 0,
      active: false,
      worktitle: "2002 Прием + Выдача + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "7",
      operatorId: 0,
      active: false,
      worktitle: "2002 Прием + Выдача + ЛсЮЛ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "8",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "9",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "10",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "11",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "12",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "13",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
    {
      winno: "14",
      operatorId: 0,
      active: false,
      worktitle: "1004 Налог земля, имущество, транспорт + ЛсОВ",
      INSERVICE: [],
      DELAYED: [],
    },
  ],
});

</script>

<template>
  <div class="mon-container">
    <div class="header">
      <h1>Мониторинг</h1>
    </div>
    <div class="inputBlock">
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
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
        <div v-if="infoObject" class="windows">
          <div class="waits">
               <WaitingComponent/>
                
          </div>
          <div class="tables">
            <WindowComponent operator-name="Alan Brian" :isActive="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="false" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            <WindowComponent operator-name="Alan Brian" :is-active="true" in-service="true" />
            
            
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
    padding: 1rem 2rem;
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
