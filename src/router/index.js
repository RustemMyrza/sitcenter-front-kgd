import { createRouter, createWebHistory } from "vue-router";
// import axios from "axios";

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

import TestView from "@/views/TestView.vue";



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
  },
  {
    path: "/",
    name: "main",
    component: MainView,
    // meta: { requiresAuth: true }
  },
  {
    path: "/amount-dash",
    name: "amountDash",
    component: DashboardAmountView,
    props: true,
    // meta: { requiresAuth: true }
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


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//   // Check if the route requires authentication
//   if (to.meta.requiresAuth) {
//     // Check if the user is authenticated (you need to implement your own logic here)
//     const isAuthenticated = await checkAuthentication(); // Function to check authentication status
//     if (isAuthenticated) {
//       // If authenticated, proceed to the route
//       next();
//     } else {
//       // If not authenticated, redirect to the login page
//       next('/login');
//     }
//   } else {
//     // If the route doesn't require authentication, proceed to the route
//     next();
//   }
// });

// async function checkAuthentication() {

//   try {
//     const isValid = await axios.post("/auth", {
//       headers: {
//         bearer: localStorage.getItem("authToken")
//       }
//     })
//     isValid
//   } catch (err) {
//     console.log(err);
//   }
  
// }

export default router;
