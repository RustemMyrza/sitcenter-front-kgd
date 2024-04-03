<script setup>
import axios from "axios";
import { onMounted, ref, watch,  } from "vue";
import { useRoute } from "vue-router";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const search = ref("");

const pagination = ref({
  pageCount: 1,
  pageNumber: 1,
});
// const pageNumber = ref(1);

const headers = [
  {
    align: "center",
    key: "iin",
    sortable: false,
    title: "ИИН",
  },
  { align: "center", key: "ticketno", title: "Номер билета" },
  { align: "center", key: "servicename", title: "Название услуги" },
  { align: "center", key: "idbranch", title: "Отделение" },
  { align: "center", key: "operator", title: "Оператор" },
  { align: "center", key: "starttime", title: "Время регистрации" },
  // { key: "waittime", title: "Время ожидания" },
  { align: "center", key: "startservtime", title: "Время обслуживания" },
  { align: "center", key: "rating", title: "Оценка" },
  { align: "center", key: "alarm", title: "Alarm" },
];
const desserts = ref([]);
const route = useRoute();

const getTicketList = async () => {
  let url;
  try {
    if (route.query.branch_id) {
      url = `http://${host}:${port}/api/v1/tickets/list/${route.query.branch_id}?page=${pagination.value.pageCount}&limit=25`;
    } else url = `http://${host}:${port}/api/v1/tickets/list?page=${pagination.value.pageCount}&limit=25`;

    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    // console.log(result.data.pages);

    pagination.value.pageCount = result.data.pages;
    desserts.value = result.data.data.tickets;
    // console.log(pagination.value.pageCount)
    // search.value =313;
  } catch (err) {
    console.log(err);
  }

};
watch(pagination.value, (newValue, oldValue) => {
  // This function will be called whenever the value changes
  console.log('New value:', newValue);
  console.log('Old value:', oldValue);
});
// watchEffect(()=>{
//     console.log(pagination.value)
// });

onMounted(() => {
  getTicketList();
});
</script>

<template>
  <div class="ticket-container">
    <div class="ticketMain">
      <div class="filter block">
        <button class="btn btn-primary">Все билеты</button>
        <button class="btn btn-warning">Плохие оценки</button>
        <button class="btn btn-warning">
          Перевышение времени обслуживания
        </button>
        <button class="btn btn-warning">Перевышение времени ожидания</button>
      </div>
      <div class="pagi ">
        <div class="text-center">
          <v-pagination
            v-model="pagination.pageNumber"
            :length="pagination.pageCount"
            :total-visible="10"
          ></v-pagination>
        </div>
      </div>
      <v-card title="Билеты" flat>
        <!-- <template v-slot:text>
          <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line></v-text-field>
        </template> -->

        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          :hide-default-footer="true"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ticket-container {
  margin: 1rem;

  .filter {
  
    padding: 0.5rem;

    button {
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
  }
}
</style>
