<script setup>
// import { ref } from "vue";
// @ is an alias to /src

import BlockElement from "@/components/blocks/dashboard/top/BlockElement.vue";


import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();

// const offline = ref(0);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const router = useRouter();

const serverInfo = ref({
  color: "#130950",
  icon: "fas fa-server",
  text: "Количество неработающих УГД",
  number: 11,
  link: "/server",
});
const rateInfo = ref({
  color: "#10877A",
  icon: "fas fa-vote-yea",
  text: "Средняя оценка",
  number: 31,
  link: "/tickets",
});
const badRate = ref({
  color: "#d2aa66",
  icon: "fas fa-exclamation-circle",
  text: "Количество плохих оценок",
  number: 55,
  link: "/tickets?tickets=bad",
});
const maxWaitTime = ref({
  color: "#F38E1B",
  icon: "fas fa-clock",
  text: "Максимальное время ожидания",
  number: 41,
  link: "/time-dash",
});
const maxServTime = ref({
  color: "#6C1895",
  icon: "fas fa-people-arrows",
  text: "Максимальное время обслуживания",
  number: 12,
  link: "/time-dash",
});

const fetchData = async () => {
  let url = `http://${host}:${port}/api/v1/tickets/map`;
  // if(route.query.branch_id){
  //   const id = route.query.branch_id;
  //   url = `http://${host}:${port}/api/v1/tickets/map/${id}`;
  // }
  try {
    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    // console.log(result.data.data.server_list);
    let offline = 0;
    let total = 0;
    const servers = result.data.data.server_list;
    servers.map(server => {
      server.children.map(child => {
        if (child.ONN === 0) {
          offline++;
        }
        total++;
      })
    })

    serverInfo.value.number = offline;
    const ratio = (offline / total).toFixed(2);
    console.log(ratio)
    if (ratio >= 0.3) {
      serverInfo.value.color = "red";
    }

    rateInfo.value.number = result.data.data.averageRate;
    if (rateInfo.value.number <= 3) {
      rateInfo.value.color = "red";
    }

  } catch (err) {
    console.log(err);
  }


};

const getValues = async () => {
  let url = `http://${host}:${port}/api/v1/tickets/all`;
  // if(route.query.branch_id){
  //   const id = route.query.branch_id;
  //   url = `http://${host}:${port}/api/v1/tickets/all/${id}`;
  // }
  try {
    const result = await axios.get(url, {
      headers: {
        bearer: localStorage.getItem("authToken"),
      },
    });
    // console.log(result.data.data)
    badRate.value.number = result?.data?.data?.alarm?.data[2]?.count ?? 0;
    badRate.value.color = badRate.value.number > 10 ? "red" : "#d2aa66";
    maxWaitTime.value.number = result?.data?.data?.alarm?.data[1]?.count ?? 0;
    maxServTime.value.number = result?.data?.data?.alarm?.data[0]?.count ?? 0;

  } catch (err) {
    //alert("Нет билетов")
    router.push({ path: "/login", });
    if (err.response && err.response.status === 401) {
      // Handle 401 Unauthorized error here
      console.log("Unauthorized. Please login again.");

    } else {
      // Handle other errors
      console.log(err);
    }
  }

}

watch(() => route.query, () => {
  getValues();
  fetchData();
});



onMounted(() => {
  fetchData();
  getValues();
});


</script>
<template>
  <div class="mainBlocks flex justify-around">
    <div class="serverInfo block w-64">
      <BlockElement :info="serverInfo" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="rateInfo" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="badRate" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="maxWaitTime" />
    </div>
    <div class="markInfo block w-64">
      <BlockElement :info="maxServTime" />
    </div>
  </div>
</template>