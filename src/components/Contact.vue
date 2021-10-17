<script setup>
import { ref } from 'vue'

defineProps({

  msg: {
    type: String,
    default: 'CONTACT ME'
  }
})

const count = ref(0)
</script>

<template>
  <div class="col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
    <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5">
      <p
        class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl"
      >{{ msg }}</p>
    </div>
  </div>
  <div class="bg-gray-100  flex justify-center items-center">
    <form
      action
      class="max-w-lg border border-gray-200 shadow-xs mx-auto rounded-lg p-10 bg-white text-center space-y-6 flex-grow"
    >
      <div class="flex flex-col">
        <label for="email" class="self-start mb-2 font-medium text-gray-800">Ingresa tu email</label>
        <input
          type="text"
          id="email"
          placeholder="Escribe tu email"
          class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
          autocomplete="off"
        />
      </div>
      <div class="flex flex-col">
        <label for="pass" class="self-start mb-2 font-medium text-gray-800">Contraseña</label>
        <input
          type="text"
          id="pass"
          placeholder="Escribe tu contraseña"
          class="outline-none px-2 py-2 border shadow-sm placeholder-gray-500 opacity-50 rounded"
          autocomplete="off"
        />
      </div>
      <div class="flex justify-between">
        <span class="flex items-center">
          <div class="btn-status">
            <input type="checkbox" name="checkbox" id="switch" class="hidden" />
            <label for="switch" class="switch block mr-2"></label>
          </div>
          <span>Recordar contraseña</span>
        </span>
      </div>
      <button class="w-full bg-indigo-300 py-2 rounded font-semibold">Send</button>
      <div class="flex items-center text-gray-800">
        <span class="block border border-gray-200 w-1/3 mr-2"></span>
        contact me with 
        <span class="block border border-gray-200 w-1/3 ml-2"></span>
      </div>
      <div class="flex justify-around text-center divide-x divide-gray-300">
        <a href="http://facebook.com" target="blank" class="w-16 h-16  p-1 cursor-pointer">
          <img src="../assets/imgs/facebook-logo-3-1.png" alt="facebook" class />
        </a>
        <a href="http://twitter.com" target="blank" class="w-16 h-16 p-1 cursor-pointer">
          <img src="../assets/imgs/wats.png" alt="watsapp" class />
        </a>
        <a href="https://github.com/" target="blank" class="w-16 h-16 p-1 cursor-pointer">
          <img src="../assets/imgs/25231.png" alt="github" class />
        </a>
      </div>
    </form>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
