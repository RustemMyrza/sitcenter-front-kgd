
<script setup>
// import { ref } from "vue";
// @ is an alias to /src

import BlockElement from "@/components/blocks/dashboard/top/BlockElement.vue";


import axios from "axios";
import { onMounted, ref} from "vue";


// const offline = ref(0);

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;

const serverInfo = ref({
    color: "red",
    icon: "fas fa-server",
    text: "Количество неработающих УГД",
    
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
  color: "red",
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
  const result = await axios.get(`http://${host}:${port}/api/v1/tickets/map`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  // console.log(result.data.data.server_list);
  let offline = 0;
  const servers = result.data.data.server_list;
  servers.map(server =>{
    server.children.map(child=>{
      if(child.ONN === 0){
        offline++;
      }
    })
  })

  serverInfo.value.number = offline;
  rateInfo.value.number = result.data.data.averageRate;
 
};



onMounted(() => {
  fetchData();
  (async()=>{
    const result = await axios.get(`http://${host}:${port}/api/v1/tickets`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  // console.log(result.data.data)
  badRate.value.number = result.data.data.alarm.data[2].count;
  maxWaitTime.value.number = result.data.data.alarm.data[1].count;
  maxServTime.value.number = result.data.data.alarm.data[0].count;
    
  })()

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