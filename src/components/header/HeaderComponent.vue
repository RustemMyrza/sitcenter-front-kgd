
<script setup>
const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
import { toggleSidebar, collapsed } from "@/components/sidebar/state";
import nonPhoto from "@/assets/avatart.jpg";

import axios from "axios";
import { onMounted, ref,watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';

const route = useRouter();
const store = useStore(); // Use the store

const username = ref(null);
const image = ref('');

const OnLogOut = () => {
  store.dispatch('logout'); // Dispatch the logout action
  route.push("/login");
}

const getImage = async()=>{
  const result = await axios.get(`http://${host}:${port}/api/v1/users/get-info`,{
    headers:{
      bearer:localStorage.getItem("authToken")
    }
  });
  console.log(result.data.user[0].image);
  if(result.data.user[0].image){
    const imgSrc = 'http://localhost:3000/images/'+ result.data.user[0].image;
    localStorage.setItem("image",imgSrc);
    image.value = imgSrc;
  }
  else 
    image.value = nonPhoto;
  
}
watch(() => localStorage.getItem("image"), (oldValue,newValue) => {
  image.value = newValue;
});

onMounted(() => {
  username.value = store.getters.username;
  getImage();
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
      <div class="userInfo ">
        <div class="dropdown ">
         
          <button 
            class="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
          
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
.header-container {
  width: 100%;

  background-color: rgb(232, 238, 238);
  .toggleIcon{
    cursor: pointer;
  }
  .headerInfo {
    .userInfo{
      .dropdown{
        button{
          
          display: flex;
          justify-content: center;
          align-items: center;
          img{
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
