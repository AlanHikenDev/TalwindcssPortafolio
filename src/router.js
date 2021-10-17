import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue"
import About from "./components/About.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue"
// español 
import Inicio from "./components/esp/Home.vue";
import Habilidades from "./components/esp/Skills.vue"
import Acerca from "./components/esp/About.vue";
import Trabajo from "./components/esp/Work.vue";
import Contacto from "./components/esp/Contact.vue"


const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/skills", component: Skills },
  { path: "/work", component: Work },
  { path: "/contact", component: Contact },
  // en español 
  { path: "/esp/", component: Inicio },
  { path: "/esp/acerca", component: Acerca },
  { path: "/esp/habilidades", component: Habilidades },
  { path: "/esp/trabajo", component: Trabajo },
  { path: "/esp/contacto", component: Contacto },
  
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;