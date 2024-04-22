<script setup>
import axios from "axios";
import { onMounted, ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const search = ref("");
const pagination = ref({
  pageCount: 1,
  pageNumber: 1,
});
const headers = [
  { align: "center", key: "iin", sortable: false, title: "ИИН" },
  { align: "center", key: "ticketno", title: "Номер билета" },
  { align: "center", key: "servicename", title: "Название услуги" },
  { align: "center", key: "idbranch", title: "Отделение" },
  { align: "center", key: "operator", title: "Оператор" },
  { align: "center", key: "state", title: "Статус" },
  { align: "center", key: "starttime", title: "Время регистрации" },
  { align: "center", key: "startservtime", title: "Время обслуживания" },
  { align: "center", key: "rating", title: "Оценка" },
  { align: "center", key: "waitover", title: "Превышение времени ожидания" },
  { align: "center", key: "servover", title: "Превышение времени обслуживания" },
];

const desserts = ref([]);
const route = useRoute();
const router = useRouter();

const getTicketList = async () => {
  try {
    const params = new URLSearchParams({
      page: pagination.value.pageNumber,
      limit: 100,
    });

    let url = `http://${host}:${port}/api/v1/tickets/list`;

    if (route.query.branch_id) {
      url += `/${route.query.branch_id}`;
    }

    url += `?${params.toString()}`;

    const result = await axios.get(url, {
      headers: { bearer: localStorage.getItem("authToken") },
    });

    pagination.value.pageCount = result.data.pages;
    desserts.value = result.data.data.tickets;
  } catch (err) {
    console.error(err);
  }
};

const filterTickets = async (value) => {
  try {
    const params = new URLSearchParams({
      page: pagination.value.pageNumber,
      limit: 100,
      filter: value === "bad-rate" ? "bad" : value === "wait" ? "wait" : value === "serv" ? "serv" : undefined
    });

    let url = `http://${host}:${port}/api/v1/tickets/list`;

    if (route.query.branch_id) {
      url += `/${route.query.branch_id}`;
    }

    url += `?${params.toString()}`;

    const result = await axios.get(url, {
      headers: { bearer: localStorage.getItem("authToken") },
    });

    pagination.value.pageCount = result.data.pages;
    pagination.value.pageNumber = 1;
    desserts.value = result.data.data.tickets;
  } catch (err) {
    console.error(err);
  }
};

const reset = async () => {
  try {
    const params = new URLSearchParams({
      page: pagination.value.pageNumber,
      limit: 100,
    });

    let url = `http://${host}:${port}/api/v1/tickets/list?${params.toString()}`;

    const result = await axios.get(url, {
      headers: { bearer: localStorage.getItem("authToken") },
    });

    pagination.value.pageCount = result.data.pages;
    pagination.value.pageNumber = 1;
    desserts.value = result.data.data.tickets;
    router.push({ ...router.currentRoute.value, query: {} });
  } catch (err) {
    console.error(err);
  }
};

watch(() => pagination.value.pageNumber, () => {
  getTicketList();
});

watch(() => route.query, () => {
  getTicketList();
});

const formattedDesserts = computed(() => {
  return desserts.value.map(ticket => {
    return {
      ...ticket,
      starttime: new Date(ticket.starttime).toLocaleString("ru-RU"),
      startservtime: new Date(ticket.startservtime).toLocaleString("ru-RU"),
      rating: ticket.rating === "5" ? "Отлично" : ticket.rating === "4" ? "Хорошо" : ticket.rating === "4" ? "Плохо" : "Нет оценки",
      waitover: ticket.waitover === "true" ? "Да" : "Нет",
      servover: ticket.servover === "true" ? "Да" : "Нет",
      state: ticket.state === "COMPLETED" ? "Обслужен" : ticket.state === "NEW" ? "Новый" : ticket.state === "INSERVICE" ? "Обслуживается" : "Бронь",
      idbranch: ticket.idbranch
    };
  }).sort((a, b) => {
    return a.starttime - b.starttime;
  });
});

const download = async () => {
  const URL = `http://${host}:${port}/api/v1/tickets/download`;
  try {
    const response = await axios.get(URL, {
      headers: {
        bearer: localStorage.getItem("authToken")
      },
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'generated_data.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading Excel:', error);
  }
};

onMounted(() => {
  getTicketList();
});
</script>


<template>
  <div class="ticket-container">
    <div class="ticketMain">
      <div class="filter block">
        <button class="btn btn-primary" @click="reset()">Все билеты</button>
        <button class="btn btn-primary" @click="download()">Скачать</button>
        <button class="btn btn-warning" @click="filterTickets('bad-rate')">Плохие оценки</button>
        <button class="btn btn-warning" @click="filterTickets('serv')">
          Перевышение времени обслуживания
        </button>
        <button class="btn btn-warning" @click="filterTickets('wait')">Перевышение времени ожидания</button>
      </div>
      <div class="pagi ">
        <div class="text-center">
          <v-pagination v-model="pagination.pageNumber" :length="pagination.pageCount"
            :total-visible="10"></v-pagination>
        </div>
      </div>
      <v-card title="Талоны" flat>
        <!-- <template v-slot:text>
          <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line></v-text-field>
        </template> -->
        <v-select label="Select"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
        <v-data-table :headers="headers" :items="formattedDesserts" :search="search" :hide-default-footer="true"
          no-data-text="Нет билетов" items-per-page-text="Билетов на странице"></v-data-table>
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
