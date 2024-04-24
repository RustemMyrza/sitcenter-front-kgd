<script lang="js">
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import { sidebarWidth } from "@/components/sidebar/state";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import DashboardTop from "./components/header/DashboardTop.vue";
import { useRoute } from 'vue-router';

export default {
  components: { SidebarComponent, HeaderComponent, DashboardTop },
  setup() {
    const route = useRoute();

    return { sidebarWidth, route };
  },
  data() {
    return {
      currentRoute: '',
    }
  },
  methods: {
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },

};
</script>


<template>
  <div v-if="!isLoginPage()" class="side-bar">
    <SidebarComponent />
  </div>
  <div class="main" :style="{ 'margin-left': !isLoginPage() ? sidebarWidth : 'auto' }">
    
      <div v-if="!isLoginPage()" class="head">
        <div class="header">
          <header-component  />
        </div>
        
        <div class="dashboard">
          <dashboard-top />
        </div>
      </div>
      <router-view/>
    
    
    <!-- <router-view :style="{ 'margin-left': !isLoginPage() && sidebarWidth }" /> -->
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dashboard {
  margin: 0.5rem auto;
}

@media print{
  .side-bar{
    display: none;
  }
  .header{
    display: none;
  }
 
  .main {
    margin-left: auto !important;
  }
}
</style>
