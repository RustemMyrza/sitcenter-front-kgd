<script setup>
import { ref } from "vue";

//monitoring images
import worker from "@/assets/worker.png";
import table from "@/assets/table.png";
import table_transparent from "@/assets/table_transparent.png";

import client from "@/assets/client.png";
import waiting from "@/assets/waiting.png";
// import waitin1 from "@/assets/waiting1.png";
import waiting2 from "@/assets/waiting2.png";
//monitoring images


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


const isActive = ref(true)
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
                    <h4>Количество обслуживающихся клиентов: 44</h4>
                </div>
                <div class="waitClient p-2">
                    <h4>Количество ожидающих клиентов: 44</h4>
                </div>
            </div>
            <div class="operatorIndicator m-2 w-full">
                <div class="onlineOperator p-2">
                    <h4>Количество операторов в сети: 45</h4>
                </div>
                <div class="offlineOperator p-2">
                    <h4>Количество операторов вне сети: 66</h4>
                </div>
            </div>
            
        </div>
        <div v-if="infoObject" class="windows">
          <div class="waits">
               
                <div class="wait">
                    <div class="status"></div>
                    <img :src="waiting" alt="">
                </div>
               
                <div class="wait">
                    <div class="status"></div>
                    <img :src="waiting2" alt="">
                </div>
          </div>
          <div class="tables">
            <div class="table">
                <div class="operator">
                    <div class="operatorInfo " >Алимханов Жанузак</div>
                    <img :src="(worker)? worker :2" alt="">
                </div>
                <div class="tableImg" >
                    <div class="tableImgInfo " :class="isActive ? 'alert' : 'inactive'">
                        5
                    </div>
                    <img :src="(table_transparent)? table :2" alt="">
                </div>
                <div class="client">
                    <div class="clientInfo ">
                        Налог на имущество
                    </div>
                    <img :src="(client)? client :2" alt="">
                </div>
            </div>
            
           
            
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
        height: 20%;
        background-color:rgba(44, 44, 44, 0.308);

        .operatorIndicator{
            border-left: 2px solid white;
        }
        h4{
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
            .wait{
                width: 10%;
                margin: 1rem 1rem;
                .status{
                    background-color: green;
                    width: 45%;
                    height: 5%;
                    border-radius: 50%;
                }
            }
        }
        .tables{
            overflow-y:scroll;
            width: 70%;
            height: 100%;
            
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 1rem;
            .table{
                
                width: 20%;
                height: 20%;
                position: relative;
                margin: 2rem auto;
                font-weight: 700;
                .operator{
                    position: absolute;
                    top: 12%;
                    left: 20%;
                    width: 40%;
                    .operatorInfo{
                        font-size: .8rem;
                        
                        position: absolute;
                        top: -40%;
                    }

                    
                }
                .tableImg{
                    position: absolute;
                    left: 15%;
                    top: 25%;
                    width: 40%;
                    z-index: 1;
                    .tableImgInfo{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        font-size: 1.5rem;
                        left: -20%;
                        top: -25%;
                        width: 40%;
                        height: 40%;
                        border-radius: 50%;
                        background-color:rgba(255, 255, 255, 0.733);
                    }
                    .alert{
                        color: white;
                        background-color: rgb(238, 32, 32)!important;
                        animation: pulse-animation 2s infinite;
                    }
                }
                .client{
                    position:absolute;
                    left: 10%;
                    top: 30%;
                    width: 40%;
                    z-index: 999;
                    .clientInfo{
                        position: absolute;
                        font-size: 0.8rem;
                        left: -80%;
                        top: 80%;
                    }
                }

            }
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
