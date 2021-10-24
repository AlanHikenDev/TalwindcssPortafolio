<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import FooterVue from './components/layout/Footer.vue'
import { ref, onMounted } from 'vue';
import router from "../src/router";
export default {
    name: 'MAIN',
    components: {
      FooterVue
      },
      setup () {
        
        const open = ref(false)
        const openlang = ref(false)
        const lang = ref('ENG')

        function onChangeLang (langm, rout) {
          //alert('a cambiado el lenguaje' +langm)
          openlang.value=false;
          lang.value=langm;
          console.log(this.lang)
          console.log(rout)
          if( langm==='ESP' ){
            switch (rout) {
              case "/":
              router.push('/esp/')
              break;
              case "/about":
              router.push('/esp/acerca/')
              break;
              case "/skills":
              router.push('/esp/habilidades')
              break;
              case "/work":
              router.push('/esp/trabajo')
              break;
              case "/contact":
                router.push('/esp/contacto/')
              break;
            }
          }else if( langm==='ENG' ){
            switch (rout) {
              case "/esp/":
              router.push('/')
              break;
              case "/esp/acerca/":
              router.push('/about')
              break;
              case "/esp/habilidades":
              router.push('/skills')
              break;
              case "/esp/trabajo":
              router.push('/work')
              break;
              case "/esp/contact":
                router.push('/contact')
              break;
            }
          } 
         // router.push('/esp/')
        }
        onMounted(()=>{
          window.scrollTo(0, 0)
        });
        return {
          // schema,
          onChangeLang,
          open,
          openlang,
          lang,
        }
      },
    
}
</script>

<template>
 
  <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" v-on:click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed.  Menu open: "hidden", Menu closed: "block"  -->
          <svg :class="open ? 'hidden': ' block'" class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden"-->
          <svg :class="open ? ' block': 'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="../src/assets/solo19.png" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="../src/assets/solo19.png" alt="Workflow">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div v-if="lang ==='ENG'" class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                
            <router-link to="/"        :class="($route.path ==='/') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">HOME</router-link>
             
            <router-link to="/about"   :class="($route.path ==='/about') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium">ABOUT</router-link>
            
            <router-link to="/skills"  :class="($route.path ==='/skills') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">SKILLS</router-link>
            
            <router-link to="/work"    :class="($route.path ==='/work') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">WORK</router-link>
            
            <router-link to="/contact" :class="($route.path ==='/contact') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'"  class="px-3 py-2 rounded-md text-sm font-medium">CONTACTO</router-link>
            
          </div>
          <div v-if="lang ==='ESP'" class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                
            <router-link to="/esp/"        :class="($route.path ==='/esp/') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">INICIO</router-link>
             
            <router-link to="/esp/acerca"   :class="($route.path ==='/esp/acerca') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium">ACERCA DE </router-link>
            
            <router-link to="/esp/habilidades"  :class="($route.path ==='/esp/habilidades') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">HABILIDADES</router-link>
            
            <router-link to="/esp/trabajo"    :class="($route.path ==='/esp/trabajo') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">TRABAJO</router-link>
            
            <router-link to="/esp/contacto" :class="($route.path ==='/esp/contact') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'"  class="px-3 py-2 rounded-md text-sm font-medium">CONTACTO</router-link>
            
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="">{{lang}}</span>
          <!-- Heroicon name: outline/bell -->
          
        </button> 
        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" v-on:click="openlang = !openlang" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="language" class=" h-6 w-6 svg-inline--fa fa-language fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path></svg>
            </button> 
          </div>
          <!-- Dropdown menu, show/hide based on menu state.
              Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" -->
          <transition name="slide-fade"
            enter-active-class="transition-all transition-fastest ease-out-quad"
            leave-active-class="transition-all transition-faster ease-in-quad"
            enter-class="opacity-0 scale-70"
            enter-to-class="opacity-100 scale-100"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-70"
          >    
          <div v-if="openlang"  class="origin-top-right transition ease-out duration-100 z-10 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" v-on:click="onChangeLang('ENG',$route.path)" class="block px-4 py-2 text-sm" :class="(lang=='ENG')? 'bg-gray-200 text-gray-700':'text-gray-700'" role="menuitem" tabindex="-1" id="user-menu-item-0">ENG</a>
            <a href="#" v-on:click="onChangeLang('ESP',$route.path)" class="block px-4 py-2 text-sm" :class="(lang=='ESP')? 'bg-gray-200 text-gray-700':'text-gray-700'" role="menuitem" tabindex="-1" id="user-menu-item-1">ESP</a>
          </div>
          </transition>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <transition
    enter-active-class="transition-all transition-fastest ease-out-quad"
    leave-active-class="transition-all transition-faster ease-in-quad"
    enter-class="opacity-0 scale-70"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-70"
  >
  <div class="sm:hidden " v-if="open" id="mobile-menu">
    <div v-if="lang ==='ENG'" class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link to="/"        :class="($route.path ==='/') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">HOME</router-link>
      <router-link to="/about"        :class="($route.path ==='/about') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">ABOUT</router-link>
      <router-link to="/skills"        :class="($route.path ==='/skills') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">SKILLS</router-link>
      <router-link to="/work"        :class="($route.path ==='/work') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">WORK</router-link>
      <router-link to="/contact"        :class="($route.path ==='/contact') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">CONTACT</router-link>
    </div>
    <div v-if="lang ==='ESP'" class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link to="/es/"        :class="($route.path ==='/es/') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">INICIO</router-link>
      <router-link to="/esp/acerca"        :class="($route.path ==='/esp/acerca') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">ACERCA</router-link>
      <router-link to="/esp/habilidades"        :class="($route.path ==='/esp/habilidades') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">HABILIDADES</router-link>
      <router-link to="/esp/trabajo"        :class="($route.path ==='/esp/trabajo') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">TRABAJO</router-link>
      <router-link to="/esp/contacto"        :class="($route.path ==='/esp/contacto') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">CONTACTO</router-link>
    </div>
  </div>
  </transition>
</nav>
<router-view v-slot="{ Component }">
  <transition 
    enter-active-class="transition delay-700 duration-700 ease-out-quad"
    leave-active-class="transition delay-700 duration-700 ease-in-out"
    enter-class="opacity-0 transform delay-700  scale-70"
    enter-to-class="opacity-100 transform delay-700 scale-700"
    leave-class="opacity-100 transform delay-700  scale-700"
    leave-to-class="opacity-0 transform delay-700 scale-70"
  >
    <component :is="Component" >
      
    </component>
  </transition>
</router-view>
  <FooterVue />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
