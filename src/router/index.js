import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

const host = process.env.VUE_APP_SERVER_HOST;
const port = process.env.VUE_APP_SERVER_PORT;
// import { mapActions} from 'vuex';

import MainView from "@/views/MainView";
import DashboardAmountView from "../views/DashboardAmountView.vue";
import DashboardView from "@/views/DashboardView.vue";
import MonitoringViewVue from "@/views/MonitoringView.vue";
import EmployeeRate from "@/views/EmployeeRate";
import TicketsView from "@/views/TicketsView";
import ChatViewVue from "@/views/ChatView.vue";
import ServerView from "@/views/ServersView";
import UsersView from "@/views/UsersView";
import AlarmView from "@/views/ChangerMenu.vue";
import CameraView from "@/views/CameraView.vue";

import LoginView from "@/views/LoginView.vue";
import MyProfileView from "@/views/MyProfileView.vue";

import BillBoardView from "@/views/BillBoardView.vue";

import TestView from "@/views/TestView.vue";

import store from "@/store";

const routes = [
  {
    path: "/test",
    name: "test page",
    component: TestView,
  },
  {
    path: "/login",
    name: "login page",
    component: LoginView,
   
  },
  {
    path: "/profile",
    name: "profile page",
    component: MyProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: { requiresAuth: true }
  },
  {
    path: "/amount-dash",
    name: "amountDash",
    component: DashboardAmountView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: "/time-dash",
    name: "timeDash",
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: "/monitoring",
    name: "monitoring",
    component: MonitoringViewVue,
    meta: { requiresAuth: true }
  },
  {
    path: "/employee-rate",
    name: "employee-rate",
    component: EmployeeRate,
    meta: { requiresAuth: true }
  },
  {
    path: "/tickets",
    name: "tickets",
    component: TicketsView,
    meta: { requiresAuth: true }
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatViewVue,
    meta: { requiresAuth: true }
  },
  {
    path: "/server",
    name: "servers",
    component: ServerView,
    meta: { requiresAuth: true }
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
    meta: { requiresAuth: true }
  },
  {
    path: "/changer",
    name: "menu-changer",
    component: AlarmView,
    meta: { requiresAuth: true }
  },
  {
    path: "/cameras",
    name: "cameras",
    component: CameraView,
    meta: { requiresAuth: true }
  },
  {
    path: "/bill-board",
    name: "billboard",
    component: BillBoardView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach(async (to, from, next) => {
  const check =  checkToken();
  const isAuthenticated = store.state.isAuthenticated && check;
  
  // Check if the route requires authentication
  if (to.path === '/login' && isAuthenticated) {
    // Redirect to the main page if already authenticated
    next({ name: 'main' });
  }
  else if (to.meta.requiresAuth) {
    // Check if the user is authenticated
    if (isAuthenticated) {
      // If authenticated, proceed to the route
      next();
    } else {
      // If not authenticated, redirect to the login page
      next('/login');
    }
  } else {
    // If the route does not require authentication, proceed to the route
    next();
  }
  
  // Call the checkToken action to ensure token validity
  
});

const checkToken =  async ()=> {
  const url = `http://${host}:${port}/api/v1/auth`;
  try {
    await axios.get(url,{
      headers:{
        bearer:localStorage.getItem("authToken")
      }
    });
    return true;
    
  } catch (err) {
    
    localStorage.removeItem("authToken");
    console.log(err);
    return false;
  }
};


export default router;
