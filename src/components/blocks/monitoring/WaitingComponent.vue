<script setup>

import waiting from "@/assets/waiting.png";
// import waitin1 from "@/assets/waiting1.png";
// import waiting2 from "@/assets/waiting2.png";
</script>

<template>
    <div class="wait">
        <div class="status"></div>
        <img :src="waiting" alt="">
    </div>
</template>
<style lang="scss" scoped>
.wait{
    width: 10%;
    margin: 1rem 1rem;
    .status{
        background-color: green;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
}
</style>
