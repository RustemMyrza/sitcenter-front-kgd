<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <router-link to="/">
      <h5>
        <span v-if="collapsed">
          <span class="flex justify-center items-center"> 
            <img src="../../assets/logo.png" alt="" width="60%">
          </span>
        </span>
        <div v-else class="flex">
           <img src="../../assets/logo.png" alt="" width="15%"> 
          <div class="flex justify-center items-center p-2">Ситуационный центр</div> 
        </div>
      </h5>
    </router-link>
    

     <SidebarLink to="/amount-dash" icon="fas fa-chart-pie">Количественные показатели</SidebarLink>
     <!-- <SidebarLink to="/time-dash" icon="fas fa-chart-bar">Временные показатели</SidebarLink> -->
     <SidebarLink to="/time-dash" icon="fas fa-chart-bar">Временные показатели</SidebarLink>
     <SidebarLink to="/monitoring" icon="far fa-eye">Мониторинг</SidebarLink>
     <SidebarLink to="/employee-rate" icon="fas fa-poll-h">Рейтинг сотрудников</SidebarLink>
     <SidebarLink to="/tickets" icon="fas fa-ticket-alt">Билеты</SidebarLink>
      <span class="divider"></span>
     <SidebarLink to="/chat" icon="fas fa-comments">Чат</SidebarLink>
     <!-- <SidebarLink to="/users" icon="fas fa-user-tie">Пользователи</SidebarLink> -->
     <!-- <span class="divider"></span> -->
     <SidebarLink to="/server" icon="fas fa-server">Серверы</SidebarLink>
     <SidebarLink to="/changer" icon="fas fa-toggle-on" >Переключение режимов</SidebarLink>
     <SidebarLink to="/cameras" icon="fas fa-camera" >Видеокамеры</SidebarLink>
   
    <!-- <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span> -->
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #262726;
  --sidebar-item-hover: #696969;
  --sidebar-item-active: #585858;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
a{
  text-decoration: none;
  color: white;
}

.sidebar h5 {
 
  height: 2.5em;
}
.divider{
  width: 100%;
  height: 2px;
  background-color: white;
  margin: 0.5rem;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: .5em;
  
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}


</style>