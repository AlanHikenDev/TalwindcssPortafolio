<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import FooterVue from './components/layout/Footer.vue'
import { ref } from 'vue'

defineProps({
  msg: String
})

const open = ref(false)
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
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <router-link to="/"        :class="($route.path ==='/') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</router-link>
             
            <router-link to="/about"   :class="($route.path ==='/about') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium">About</router-link>
            
            <router-link to="/skills"  :class="($route.path ==='/skills') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Skills</router-link>
            
            <router-link to="/work"    :class="($route.path ==='/work') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">work</router-link>
            
            <router-link to="/contact" :class="($route.path ==='/contact') ? ' bg-gray-900 text-white': 'text-gray-300 hover:bg-gray-700 hover:text-white'"  class="px-3 py-2 rounded-md text-sm font-medium">contacto</router-link>
            
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button> 

      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden " :class="open ? 'block': 'hidden'" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

  <router-view />

  <FooterVue />
</template>

<style>

</style>
