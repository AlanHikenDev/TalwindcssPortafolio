<template>
<div>
  <div class="flex flex-col justify-center sm:py-12">
    <div class="relative py-3 mx-auto sm:max-w-xl sm:mx-auto">
      <img src="../../assets/g19.png" />
    </div>
  </div>

  <div class="flex flex-col justify-center sm:py-2">
    <div class="relative  py-3 mx-auto sm:max-w-xl sm:mx-auto text-center pt-4 sm:pt-1">
      <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl uppercase">Hola, Soy Alan, Desarrollador web</p>
      
      <p class="font-bold mx-auto pt-2 sm:pt-8 uppercase" >
        Front-End y Back-End 
      </p>
      <p class="font-bold mx-auto text-gray-600 pt-2 pb-5 sm:pt-8 " >
        Desarrollar codigo Simple y robusto, es lo que hago y me encanta.
      </p>
    </div>
  </div>

  <div class="bg-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
    
    <div class="col-span-1 sm:col-span-3 px-4 pt-7 text-center">
      <span class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-900 text-2xl sm:text-5xl"> CONSTRUYO APLICACIONES CON  </span>
    </div>

    <div class="px-4 ">
      <div class="max-w-md h-80 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class=" flex justify-center md:justify-end -mt-16">
          <div class="w-32 h-32  rounded-full bg-white  mx-auto border-2">
          <img
            class="w-20 h-20 mx-auto mt-8 "
            src="../../assets/logo-vue.png"
          />
          </div>
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> VUEJS </h2>
          <p class="mt-3 text-gray-600 ">
           Vue.js cuenta con una arquitectura de adaptación gradual que se centra en la representación declarativa y la composición de componentes. 
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 ">
      <div class="max-w-md py-4 px-8 h-80 bg-white shadow-lg rounded-lg my-5 sm:my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <div class="w-32 h-32  rounded-full bg-white  mx-auto border-2">
          <img
            class="w-20 h-20 mx-auto mt-6  "
            src="../../assets/vuetify-logo.png"
          />
          </div>
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold">VUETIFY</h2>
          <p class="mt-3 text-gray-600 ">
            Tailwind CSS es un framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS. 
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 ">
      <div class="max-w-md py-4 px-8 h-92 sm:h-80  bg-white shadow-lg rounded-lg my-20">
        <div class=" flex justify-center md:justify-end -mt-16">
          <div class="w-32 h-32  rounded-full bg-white  mx-auto border-2">
          <img
            class="w-20 h-20 mx-auto mt-6 "
            src="../../assets/1200px-Laravel.png"
          />
          </div>
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold">LARAVEL</h2>
          <p class="mt-3 text-gray-600 ">
            Flexible y adaptable no solo al MVC tradicional (controlador de vista de modelo) sino que para reducir el código propone usar Rutas con cierres. Es modular y con un amplio paquete y sistemas de controladores con los que se puede ampliar la funcionalidad de forma fácil, robusta y segura.
          </p>
        </div>
      </div>
    </div>
    
     <div class="col-span-1 sm:col-span-3 px-4 pt-1 pb-20 text-center">
      <router-link  to="/esp/habilidades" class="bg-green-900 hover:bg-green-500 text-white py-2 px-4 rounded inline-flex items-center">
         VER MAS
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="h-5 w-5  fill-current text-white svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
        </svg>
      </router-link>
    </div>
    
    </div>
    <!-- me myself and i -->
    <div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6 gap-4 ">
    
      <div class=" col-span-6 sm:col-start-3 col-end-7 px-4 pt-7 mb-2 text-center">
        <div class="max-w-sm ">
          <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl ">
            ¿ QUIEN SOY ?</p>  
        </div>
      </div>

      <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
        <div class="py-4 px-8 bg-white shadow-lg rounded-lg"> <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> Saber acerca de mi</h2>
          <p class="mt-3 text-gray-600 ">
            Soy un apasionado de la tecnología en general con amor por el desarrollo web,
            desde mi primer acercamiento con una computadora en el 2000, estaba fascinado con las crecientes
            posibilidades que ofrecen las computadoras y comencé mi viaje hacia el maravilloso mundo del desarrollo. 
          </p>
        </div>
        </div> 
      </div>

      <div class="col-span-6 sm:col-start-3 sm:col-end-5 px-4 pt-1 pb-20 text-center">
      <router-link  to="/esp/acerca" class="bg-green-900 hover:bg-green-500 text-white py-2 px-4 rounded inline-flex items-center">
          VER MAS
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="h-5 w-5  fill-current text-white svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
        </svg>
      </router-link>
    </div>
    </div>
</div>

</template>

<script>
export default {
  name: "Home",
};
</script>
