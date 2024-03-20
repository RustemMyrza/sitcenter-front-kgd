
import { toggleSidebar } from '../sidebar/state';
<script setup>
import { toggleSidebar,collapsed } from "@/components/sidebar/state";
</script>

<template>
  <div class="header-container flex justify-between items-center">
    <div @click="toggleSidebar" :class="{ 'rotate-180': collapsed }" class="toggleIcon p-4">
      <i class="fas fa-angle-double-left" />
    </div>
    <div class="headerInfo flex items-center">
      <div class="icons flex">
        <div class="bell">
          <div class="bell-amount">123</div>
          <i class="far fa-bell fa-lg"></i>
        </div>
        <div class="envelope">
          <div class="envelope-amount">123</div>
          <i class="far fa-envelope fa-lg"></i>
        </div>
      </div>
      <div class="userInfo ">
        <div class="dropdown ">
          <button 
            class="btn "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../../assets/logo.png" alt="" width="50%" />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
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
    font: 50px;
    div {
      position: relative;
      margin: 0 1rem 0 1rem;
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
