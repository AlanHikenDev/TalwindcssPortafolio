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
              <p class=" text-md  text-gray-600 md:text-base">
              Soy una persona organizada, me gusta resolver problemas, Me describo a mi mismo como una persona y empleado autosuficiente y responsable. Fan de los comics, anime y la cultura geek, disfruto la literatura si-fi ver Netflix.
              </p>
              <p>
               Tambien soy una persona de familia 
               Interested in the full spectrum of development and working on ambitious projects with positive people. 
              </p>
            <p> I am passionate about technology in general with a love for web development, 
            since my first approach with a computer in 2000, I was fascinated with the growth 
            possibilities that computers offer and began my journey towards the wonderful world of development .</p>
            <p class="uppercase">Vocational training.</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full bg-cover bg-center" style="background-image: url(../../public/971laptopesp.png);  ">
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: "Acerca de",
  setup() {
    onMounted(()=>{
          window.scrollTo(0, 0)
        });
  },
}
</script>