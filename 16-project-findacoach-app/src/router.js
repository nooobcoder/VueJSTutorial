import { createRouter, createWebHistory } from "vue-router";

// Coach Component
import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";

// Requests Component
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";

// Authentication Component
import UserAuth from "./pages/auth/UserAuth.vue";

import NotFound from "./pages/NotFound.vue";
import store from "./store/index";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/coach-id/contact
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: { requiresUnauth: true },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
router.beforeEach((to, _from, next) => {
  // Global route guard
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // Redirect the user to login/signup
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else next(true);
});

export default router;
