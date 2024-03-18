<script>
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import { sidebarWidth } from "@/components/sidebar/state";
import HeaderComponent from "./components/header/HeaderComponent.vue";
export default {
  components: { SidebarComponent, HeaderComponent },
  setup() {
    return { sidebarWidth };
  },
};
</script>
<template>
  
  <div class="side-bar">
    <SidebarComponent />
  </div>
  <div class="main">
    <div :style="{ 'margin-left': sidebarWidth }">
      <div class="head">
        <header-component />
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
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
</style>
