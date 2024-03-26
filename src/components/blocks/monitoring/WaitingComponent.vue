<script setup>

import waiting from "@/assets/waiting.png";
import { defineProps } from "vue";
// import waitin1 from "@/assets/waiting1.png";
// import waiting2 from "@/assets/waiting2.png";
const props = defineProps({
    waitover:{
        type:Boolean,
        required:true,
    },
   
})

console.log(props.alarm);
</script>

<template>
    <div class="wait">
        
        <div class="red" v-if="props.waitover===true"></div>
         <div class="green" v-else ></div>
        <img :src="waiting" alt="">
    </div>
</template>
<style lang="scss" scoped>
.wait{
    width: 10%;
    margin: 1rem 1rem;
    .green{
        background-color: green;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    
    .red{
        background-color: rgb(223, 30, 30);
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
}
</style>
