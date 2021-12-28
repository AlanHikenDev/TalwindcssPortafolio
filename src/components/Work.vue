<script setup>

defineProps({

  msg: {
      type: String,
      default: 'WORK'
    }
})

</script>

<template>
<div>
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
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl w-4/5 sm:w-5/12 px-6 py-4">
        <h3 class="mb-1 font-bold text-white text-xl">Sedesol, Desarrollador Jr </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2016 - 2017,Oaxaca de Juarez</h2>
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
          System for managing mobile devices at the Prospera headquarters
          Oaxaca (Now wellness) Mysql. laravel, Js, html5, php.
        </p>
      </div>
    </div>

    <!-- left timeline -->
    <div class="mb-8 flex justify-between sm:flex-row-reverse  items-center w-full left-timeline">
      <div class="order-1  sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl w-4/5 sm:w-5/12 px-6 py-4">
         <h3 class="mb-1 font-bold text-white text-xl">Nuestra Caja, Desarrollador web </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2017- 2018, Oaxaca De Juarez</h2> 
        <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
          In this work collaborate on an existing project that maintains the
           central file inventory to organize documents and contracts
           with company clients php, mysql, javascript, hmtl, apache servers</p>
      </div>
    </div>
    
    <!-- right timeline -->
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
         <h3 class="mb-1 font-bold text-white text-xl">DICC, Desarrollador Sr Full-stack </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2018 - Actualidad, Oaxaca de Juárez - Zacatecas</h2> 
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
          I worked as a full stack developer in applications for different
           public and private organizations of which I can highlight the following
        </p>
      </div>
    </div>

    <!-- left timeline -->
    <div class="mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
         <h3 class="mb-1 font-bold text-white text-xl">DICC, Desarrollador Sr Full-stack </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2018 - Actualidad, Oaxaca de Juárez - Zacatecas</h2> 
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
          SPM: Municipal participation system of the state of
           Oaxaca for the finance secretariat base in electronJS with vue,
           vuetfy mysql, nodeJs, git slack, npm Typescript, laravel.
          
        </p>
      </div>
    </div>

     <!-- right timeline -->
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
         <h3 class="mb-1 font-bold text-white text-xl">DICC, Desarrollador Sr Full-stack </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2018 - Actualidad, Oaxaca de Juárez - Zacatecas</h2> 
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
          - Application for the Health sector that controls the registration of
           staff and links human resources to centralize
           information in a Java 8 Spring Hibernate Postgresql array
           Html Javascript jquery.
        </p>
      </div>
    </div>
<!-- left timeline -->
    <div class="mb-8 flex justify-between sm:flex-row-reverse items-center w-full left-timeline">
      <div class="order-1 sm:w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
      </div>
      <div class="order-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl  w-4/5 sm:w-5/12 px-6 py-4">
         <h3 class="mb-1 font-bold text-white text-xl">DICC, Desarrollador Sr Full-stack </h3>
        <h2 class="mb-3 font-semibold text-white text-sm ">DE 2018 - Actualidad, Oaxaca de Juárez - Zacatecas</h2> 
        <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
          - Emily Butchers: Points of sale, order management and logistics for delivery
            of meats ElectronJS vue, vuetify, Mysql, nodeJS, laravel.
        </p>
      </div>
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
