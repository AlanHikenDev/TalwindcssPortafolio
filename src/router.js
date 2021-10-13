import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue"
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/skills", component: Skills },
  { path: "/work", component: Work },
  { path: "/contact", component: Contact },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;