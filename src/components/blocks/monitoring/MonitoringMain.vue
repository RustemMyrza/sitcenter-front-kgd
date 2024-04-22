<script setup>
import { onMounted, ref,computed, watch } from "vue";
// import { useStore } from "vuex";
import axios from "axios";
import { useRoute } from "vue-router";

import WindowComponent from "./WindowComponent.vue";
import WaitingComponent from "./WaitingComponent.vue";




// const store = useStore();

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
const route = useRoute();

const branches = ref(null);
const childBranches = ref(0);
const selectedBranch = ref(0);

// const route = useRoute();

const search = ref("");
const headers = [
  {
    align: 'center',
    key: 'winno',
    sortable: false,
    title: 'Номер окна',
  },
  { key: 'operatorId', title: 'Id оператора', align: 'center', },
  { key: 'active', title: 'Активен', align: 'center', },
  { key: 'worktitle', title: 'Название услуги', align: 'center', },
  { key: 'name', title: 'Ф.И.О', align: 'center', },
  // { key: 'iron', title: 'Iron (%)' },
];
const desserts = ref([]);

const windows = ref([]);

const waitClient = ref(0);
const info = ref({
  inservice: 0,
  wait: 0,
  online: 0,
});

const getBranches = async () => {
  console.log(host, port);
  const result = await axios.get(`http://${host}:${port}/api/v1/branches`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  // console.log(result);
  branches.value = result.data.rows;
};

const getWindows = async () => {
  try {
    const result = await axios.get(
      `http://${host}:${port}/api/v1/windows/${selectedBranch.value}`,
      {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      }
    );
    // console.log(result.data);
    desserts.value = result.data.windows;
    info.value.inservice = result.data.INSERVICE;
    info.value.wait = result.data.NEW.length;
    windows.value = result.data.windows;
    waitClient.value = result.data.NEW;
    result.data.windows.map(e => {
      if (e.operatorId !== 0) {
        info.value.online++;
      }
    });
    console.log(result.data)
  } catch (err) {
    console.log(err);
  }
};

const formattedDesserts = computed(() => {
  return desserts.value.map(ticket => {
    return {
      ...ticket,
      active:ticket.active === true ? "Да" : "Нет",
      worktitle:ticket.worktitle === "null" ? "Нет" : ticket.worktitle,
    }
  }).sort((a, b) => {
    return a.starttime - b.starttime;
  });
});

const downloadCSV = () => {
  // Convert items to CSV format
  try {
    const excel = desserts.value.map(window => {
      return {
        'Номер окна': window.winno,
        'Id оператора': window.operatorId,
        'Активен': window.active === true ? "Да" : "Нет",
        'Название услуги': window.worktitle,
        'Ф.И.О': window.name  }
    });
    // console.log(excel);
    const csvContent = convertToCSV(excel);

    // Create a Blob object with the CSV content
    const blob = new Blob(["\ufeff", csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'data.csv';

    // Trigger the download
    link.click();
  } catch (err) {
    console.log(err);
  }

}

const convertToCSV = (items) => {
  const header = Object.keys(items[0]).join(',');
  const rows = items.map(item => Object.values(item).join(','));
  return `${header}\n${rows.join('\n')}`;
}

watch(() => route.query, (oldValue,newValue) => {
    console.log(oldValue,newValue);
    childBranches.value = branches.value.find(e=>e.F_ID*1 === newValue.parent_branch*1);
    selectedBranch.value = newValue.branch_id;
    getWindows();
});

onMounted(() => {
  getBranches();
});
</script>

<template>
  <div class="mon-container">

    <div class="inputBlock">
      <select class="form-select" v-model="childBranches">
        <option selected disabled value="0">Выберите филиал</option>
        <option v-for="br in branches" :key="br.id" :value="br">
          {{ br.F_NAME }}
        </option>
      </select>

      <select :disabled="!childBranches" class="form-select" v-model="selectedBranch" @change="getWindows()">
        <option selected disabled value="0">Выберите отделение</option>
        <option v-for="child in childBranches.children" :key="child.F_ID" :value="child.F_ID">
          {{ child.F_NAME }}
        </option>
      </select>
    </div>
    <div class="live">
      <div class="indicators flex">
        <div class="clientIndicator m-2 w-full">
          <div class="inserviceClient p-2">
            <h5>Количество обслуживающихся клиентов: {{ info.inservice }}</h5>
          </div>
          <div class="waitClient p-2">
            <h5>Количество ожидающих клиентов: {{ info.wait }}</h5>
          </div>
        </div>
        <div class="operatorIndicator m-2 w-full flex justify-center items-center">
          <div class="onlineOperator p-2">
            <h5>Количество операторов в сети: {{ info.online }}</h5>
          </div>
        </div>
      </div>
      <div v-if="branches" class="windows">
        <div class="waits">
          <WaitingComponent :waitover="wait.waitover === 'true'" v-for="wait in waitClient" :key="wait.id" />
          <!-- <WaitingComponent :waitover="true" /> -->
          <!-- <WaitingComponent :waitover="true"  /> -->
        </div>
        <div class="tables">



         
          <!-- <window-component :table-number="10" :is-active="false" :in-service="false" /> -->

          <WindowComponent v-for="window in windows" :key="window.id" :table-number="window.winno"
            :operator-name="window.name" :is-active="window.operatorId === 0 ? false : true"
            :in-service="window.INSERVICE.length !== 0" :is-client-alarm="window.INSERVICE[0]?.servover" :client-info="window.INSERVICE.length !== 0
          ? window.INSERVICE[0].servicename
          : null
        " />
        </div>
      </div>
    </div>

    <div class="data-table">
      <v-btn v-if="selectedBranch" class="m-2" @click="downloadCSV()">Скачать</v-btn>
      <v-card title="Окна" flat>
        <template v-slot:text>
          <v-text-field v-model="search" label="Искать" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line></v-text-field>
        </template>

        <v-data-table :headers="headers" :items="formattedDesserts" :search="search"
        no-data-text="Нет доступых данных" items-per-page-text="Элементов на странице" ></v-data-table>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mon-container {
  width: 100%;
  height: 70vh;

  .inputBlock {
    padding: 0.5rem 2rem;

    select {
      margin: 1rem auto;
    }
  }

  .live {
    background: url("../../../assets/back.png");
    width: 100%;
    height: 100%;

    .indicators {
      height: fit-content;
      background-color: rgba(44, 44, 44, 0.308);

      .operatorIndicator {
        border-left: 2px solid white;
      }

      h5 {
        font-weight: 600;
        color: white;
      }
    }

    .windows {
      padding: 1rem;
      position: relative;
      width: 100%;
      height: 80%;
      display: flex;

      .waits {
        width: 25%;
        height: 100%;
        background-color: rgba(235, 236, 229, 0.308);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: auto;
        padding: 1rem;
      }

      .tables {
        overflow-y: scroll;
        width: 75%;
        height: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

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
