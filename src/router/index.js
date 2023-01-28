import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreatePoll from "../views/CreatePoll.vue";
import LoginPage from "../views/LoginPage.vue";
import PublicPolls from "../views/PublicPolls.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProtectedRoute from "../views/ProtectedRoute.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: () => RegisterPage,
    },
    {
      path: "/public-polls",
      name: "publicPolls",
      component: () => PublicPolls,
    },
    // {component: ()=> ProtectedRoute}
    // {
    //   path: "/public-polls",
    //   name: "publicPolls",
    //   component: () => PublicPolls,
    // },
  ],
});

export default router;
