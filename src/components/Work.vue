<script setup>
import { ref } from 'vue'

defineProps({

  msg: {
      type: String,
      required: true,
      default: 'WORK'
    }
})

</script>

<template>
<div class=" col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
  <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
    <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl ">   {{ msg }}   </p> 
  </div>
</div>

<!-- component -->
<div class="container bg-gray-200 mx-auto w-full h-full">
  <div class="relative wrap overflow-hidden p-10 h-full">
    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sm:left-1/2" ></div>
    <!-- right timeline -->
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-4/5 sm:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    <!-- left timeline -->
    <div class="mb-8 flex justify-between sm:flex-row-reverse  items-center w-full left-timeline">
      <div class="order-1  sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div class="order-1 bg-red-400 rounded-lg shadow-xl w-4/5 sm:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <!-- right timeline -->
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div class="order-1 bg-gray-400 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    <!-- left timeline -->
    <div class="mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div class="order-1 bg-red-400 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
