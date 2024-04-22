
<script setup>
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
import { toggleSidebar, collapsed } from "@/components/sidebar/state";
import nonPhoto from "@/assets/avatart.jpg";

import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex';
// import { generatePdf } from '@/utils/pdfUtils.js';

const router = useRouter();
const route = useRoute();
const store = useStore(); // Use the store

const username = ref(null);
const image = ref('');


const branches = ref(null);
const childBranches = ref(0);
const selectedBranch = ref(0);

const OnLogOut = () => {
  store.dispatch('logout'); // Dispatch the logout action
  router.push("/login");
  localStorage.removeItem("image")
}

const getImage = async () => {
  const result = await axios.get(`http://${host}:${port}/api/v1/users/get-info`, {
    headers: {
      bearer: localStorage.getItem("authToken")
    }
  });
  console.log(result.data.user[0].image);
  if (result.data.user[0].image) {
    const imgSrc = `http://${host}:${port}/images/` + result.data.user[0].image;
    localStorage.setItem("image", imgSrc);
    image.value = imgSrc;
  }
  else
    image.value = nonPhoto;

}
const downloadPdf = async () => {
  // try {
  //   const htmlContent = document.documentElement.outerHTML; // Get HTML content of the entire page
  //   await generatePdf(htmlContent, 'page1.pdf');
  //   // Repeat the above steps for other pages as needed
  // } catch (error) {
  //   console.error('Error generating PDF:', error);
  // }
  window.print()
}

const getBranches = async () => {
  const result = await axios.get(`http://${host}:${port}/api/v1/branches`, {
    headers: {
      bearer: localStorage.getItem("authToken"),
    },
  });
  console.log(result);
  branches.value = result.data.rows;
};
const filter = async () => {
  const currentQueryParams = { ...route.query };
  console.log(selectedBranch.value);
  if(childBranches.value === 0){
    router.push({ ...router.currentRoute.value, query: {} });
  }
  // Add or update query parameters
  currentQueryParams.branch_id = selectedBranch.value;
  console.log(childBranches.value);
  currentQueryParams.parent_branch = childBranches.value.F_ID *1;
  // store.commit("setChildBranchId",selectedBranch.value);
  // currentQueryParams.param2 = 'value2';

  // Navigate to the same route with updated query parameters
  router.push({ path: route.path, query: currentQueryParams });
}
watch(() => localStorage.getItem("image"), (oldValue, newValue) => {
  image.value = newValue;
});
watch(() => childBranches.value, () => {
  console.log(childBranches.value);
  if(childBranches.value === 0){
    router.push({ ...router.currentRoute.value, query: {} });
  }
});


onMounted(() => {
  username.value = store.getters.username;
  getImage();
  getBranches();
});
</script>


<template>
  <div class="header-container flex justify-between items-center">
    <div @click="toggleSidebar" :class="{ 'rotate-180': collapsed }" class="toggleIcon p-4">
      <i class="fas fa-angle-double-left" />
    </div>
    <div class="headerInfo flex items-center">
      <!-- <div class="icons flex">
        <div class="bell">
          <div class="bell-amount">123</div>
          <i class="far fa-bell fa-lg"></i>
        </div>
        <div class="envelope">
          <div class="envelope-amount">123</div>
          <i class="far fa-envelope fa-lg"></i>
        </div>
      </div> -->
      <div class="dropdown">
        <!-- <v-btn class="btn   dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Фильтр
        </v-btn> -->
        <ul class="dropdown-menu w-full">
          <div class="inputBlock ">
            <select class="form-select" v-model="childBranches">
              <option selected disabled value="0">Выберите филиал</option>
              <option value="0">Все</option>
              <option v-for="br in branches" :key="br.id" :value="br">
                {{ br.F_NAME }}
              </option>
            </select>

            <select :disabled="!childBranches" class="form-select" v-model="selectedBranch" @change="filter()">
              <option selected disabled value="0">Выберите отделение</option>
              <option v-for="child in childBranches.children" :key="child.F_ID" :value="child.F_ID">
                {{ child.F_NAME }}
              </option>
            </select>
          </div>
        </ul>
      </div>
      <div @click="downloadPdf()" class="dowloadPage cursor-pointer">
        <i class="fas fa-file-download fa-2xl"></i>
      </div>
      <div class="userInfo ">
        <div class="dropdown ">

          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false">

            <img :src="image" alt="" class="rounded-full" />
            {{ username }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><router-link to="/profile" class="dropdown-item" href="#">Мой профиль</router-link></li>
            <li><a @click="OnLogOut()" class="dropdown-item" href="#">Выход</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.dropdown-menu.show{
  width: 250px;
  transform: translate(0px,50px)!important;
}

.header-container {
  width: 100%;

  background-color: rgb(232, 238, 238);

  .toggleIcon {
    cursor: pointer;
  }

  .headerInfo {
    .userInfo {
      
      .dropdown {
        
        button {

          display: flex;
          justify-content: center;
          align-items: center;

          img {
            margin: 0 0.5rem;
            width: 40px;
          }
        }
      }
    }

    font: 50px;

    div {
      position: relative;
      margin: 0 .5rem 0 .5rem;

      .bell-amount {
        position: absolute;
        top: -50%;
        left: -20%;

        font-size: 12px;
        font-weight: 700;
        color: red;
      }

      .envelope-amount {
        position: absolute;
        top: -50%;
        left: -20%;

        font-size: 12px;
        font-weight: 700;
        color: red;
      }
    }
  }
}
</style>
