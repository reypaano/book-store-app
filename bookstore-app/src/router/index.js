import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Posts from "@/views/Books.vue";
import Register from "@/views/Register.vue";
import EditBook from "@/views/EditBooks.vue";
import AddBook from "@/views/AddBook.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Login,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: {
      requiresAuth: true, // Protect this route
    },
  },
  {
    path: "/add-book",
    name: "AddBook",
    component: AddBook,
    meta: {
      requiresAuth: true, // Protect this route
    },
  },
  {
    path: "/edit-book",
    name: "EditBook",
    component: EditBook,
    meta: {
      requiresAuth: true, // Protect this route
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Navigation guard to protect routes that require authentication
router.beforeEach((to, from, next) => {
  // const isAuthenticated = store.state.token !== null;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !store.state.token) {
    // Redirect to login page if the token is not present
    next("/login");
  } else {
    next();
  }
});

export default router;
