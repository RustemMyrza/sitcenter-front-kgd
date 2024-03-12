<script setup>
// @ is an alias to /src
import BranchTicketsChart from '@/components/chart/branchTickets/BranchTicketsChart.vue';

import ServersAnalytics from '@/components/analytics/ServersAnalytics.vue';
import GradeAnalytics from '@/components/analytics/GradeAnalytics';
import AvgWaitVue from '@/components/analytics/AvgWait.vue';
import AvgServVue from '@/components/analytics/AvgServ.vue';




</script>

<template>
    <div class="title">
        Главная страница
    </div>
    
    <div class="mainBlocks flex justify-around">
        <div class="block"><servers-analytics/></div>
        <div class="block"><grade-analytics/></div>
        <div class="block"><AvgWaitVue/></div>
        <div class="block"><AvgServVue/></div>
    </div>
 <BranchTicketsChart/>
</template>

<style lang="scss" scoped>
.title{
    font-size: 24px;
    padding: 2rem;
}
</style>


