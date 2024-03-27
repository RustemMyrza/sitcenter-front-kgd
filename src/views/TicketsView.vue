<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const search = ref("");


const headers = [
  {
    align: "start",
    key: "iin",
    sortable: false,
    title: "ИИН",
  },
  { key: "ticketno", title: "Номер билета" },
  { key: "servicename", title: "Название услуги" },
  { key: "idbranch", title: "Отделение" },
  { key: "operator", title: "Оператор" },
  { key: "starttime", title: "Время регистрации" },
  // { key: "waittime", title: "Время ожидания" },
  { key: "startservtime", title: "Время обслуживания" },
];
const desserts = ref([]);
const route = useRoute();

const getTicketList = async () => {
  let result;
  try {
    if (route.query.branch_id) {
      result = await axios.get(`http://${host}:${port}/api/v1/tickets/list/${route.query.branch_id}`, {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      });
    } else {
      result = await axios.get(`http://${host}:${port}/api/v1/tickets/list`, {
        headers: {
          bearer: localStorage.getItem("authToken"),
        },
      });
    }

    desserts.value = result.data.data.tickets;
  } catch (err) {
    console.log(err);
  }
  console.log(desserts.value);
};
onMounted(() => {
  getTicketList();
});
</script>

<template>
  <div class="ticket-container">
    <div class="ticketMain">
      <v-card title="Билеты" flat>
        <template v-slot:text>
          <v-text-field
            v-model="search"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
          ></v-text-field>
        </template>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>
