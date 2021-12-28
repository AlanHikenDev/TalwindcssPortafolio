<template>
<div class="w-full">
    <div class="col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
    <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5">
      <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl"
      >ACERCA DE MI </p>
    </div>
  </div>
    <div class="flex bg-white" style="height:600px;">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-5xl"> ¿Quien soy  <span class="text-green-800">Yo?</span></h2>
                <p class="mt-5 pt-4 text-md  text-gray-600 md:text-base"> Actualmente vivo en la ciudad de Oaxaca </p>
              <p class="text-md  text-gray-600 md:text-base">
              Soy una persona organizada, me gusta resolver problemas, Me describo a mi mismo como una persona y empleado autosuficiente y responsable. Fan de los comics, 
              anime y la cultura geek, disfruto la literatura si-fi y ver Netflix.
              </p>
              <p class="text-md  text-gray-600 md:text-base">
               Interesado en todo el espectro del desarrollo y trabajando en proyectos ambiciosos con personas positivas.  
              </p>
              <p class="text-md  text-gray-600 md:text-base">
               Soy un desarrollador proactivo que se apasiona por resolver retos, tengo
              una muy buena interacción con mis compañeros y una gran capacidad
              para trabajar en equipo, tengo la capacidad necesaria para resolver los
              retos más actuales que enfrentan las compañías de desarrollo de
              software.

              </p>

              


            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full bg-cover bg-center" style="background-image: url(../../public/971laptopesp.png);  ">
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>

    <div class="col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
    <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5">
      <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl">
        FORMACION PROFESIONAL 
      </p>
    </div>
  </div>

    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-4">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">UNIVERSIDAD</span>
          <span class="mt-1 text-gray-500 text-sm">2011 - 2016 </span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
            Instituto Superior Tecnológico de Teposcolula, Ingeniero En sistemas Computacionales
          </h2>
          <p class="leading-relaxed">
            Tengo formación profesional como ingeniero en sistemas computacionales con especialidad en desarrollo web.</p>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700"> CURSOS </span>
          <span class="mt-1 text-gray-500 text-sm">2017 - ACTUALIDAD </span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">UDEMY, PLATZI, APRENDIBLE ( TECNOLOGIAS WEB)</h2>
          <p class="leading-relaxed">Como un buen profesional me gusta estar en desarrollo constante de mi habilidades, para poder satisfaser las nesesidades que el ambiente laboral moderno exige, por ello eh tomado 
            diferentes cursos y masters, como son el caso de Laravel, Vue, Flutter, Tailwin y JS Moderno.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
export default {
  name: "Acerca de",
  setup() {
   
  },
}
</script>