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
    <h5>
      <span v-if="collapsed">
          <div class="fas fa-columns"></div>
      </span>
      <span v-else>Ситуационный центр</span>
    </h5>

     <SidebarLink to="/" icon="fas fa-columns">Главная</SidebarLink>
    <SidebarLink to="/statistics" icon="fas fa-chart-bar">Статистика</SidebarLink>
    <SidebarLink to="/monitoring" icon="far fa-eye">Мониторинг</SidebarLink>
    <SidebarLink to="/chat" icon="far fa-comments">Чат</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
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

.sidebar h5 {
  height: 2.5em;
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