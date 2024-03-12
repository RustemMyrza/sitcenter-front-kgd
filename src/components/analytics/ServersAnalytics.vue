<script setup>
import { ref } from "vue";

const number = ref(3);
</script>


<template>
  <div class="container bg-blue-600">
    <div class="amount text-white">{{ number }}</div>
    <div class="text text-white font-sans">Количество УГД, с которыми нет связи</div>
  </div>
</template>

<style lang="scss" scoped>
    .container{
        padding: 2rem 1rem;
        border-radius: 1rem;
    }
</style>