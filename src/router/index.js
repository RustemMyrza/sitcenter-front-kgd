import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/DashboardView.vue";
import MonitoringViewVue from "@/views/MonitoringView.vue";
import EmployeeRate from "@/views/EmployeeRate";
import TicketsView from "@/views/TicketsView";
import ChatViewVue from "@/views/ChatView.vue";
import ServerView from "@/views/ServersView";
import UsersView from "@/views/UsersView";
import AlarmView from "@/views/AlarmView.vue";



const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/monitoring",
    name: "monitoring",
    component: MonitoringViewVue,
  },
  {
    path: "/employee-rate",
    name: "employee-rate",
    component: EmployeeRate,
  },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketsView,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatViewVue,
  },
  {
    path: "/server",
    name: "servers",
    component: ServerView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/alarm",
    name: "alarm",
    component: AlarmView,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
