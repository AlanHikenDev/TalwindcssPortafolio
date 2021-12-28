<template>
<div class="w-full">
    <div class="col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
    <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5">
      <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl"
      >ABOUT ME </p>
    </div>
  </div>
    <div class="flex bg-white" style="height:600px;">
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 class="text-3xl font-semibold text-gray-800 md:text-5xl"> Who I  <span class="text-green-800">am?</span></h2>
                <p class="mt-5 pt-4 text-md  text-gray-600 md:text-base"> I currently live in the Oaxaca city </p>
              <p class="text-md  text-gray-600 md:text-base">
              I am an organized person, I like to solve problems, I describe myself as a self-sufficient and responsible person and employee. Comics fan,
               anime and geek culture, I enjoy si-fi literature and watching Netflix.
              </p>
              <p class="text-md  text-gray-600 md:text-base">
               Interested in the full spectrum of development and working on ambitious projects with positive people.
              </p>
              <p class="text-md  text-gray-600 md:text-base">
              I am a proactive developer who is passionate about solving challenges, I have
               a very good interaction with my colleagues and a great capacity
               to work as a team, I have the necessary capacity to solve the
               current challenges facing software development companies
               software.

              </p>
            </div>
        </div>
        <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
            <div class="h-full bg-cover bg-center" style="background-image: url(../../public/971laptop.png);  ">
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
          <span class="font-semibold title-font text-gray-700">COLLEGE</span>
          <span class="mt-1 text-gray-500 text-sm">2011 - 2016 </span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
            Instituto Superior Tecnológico de Teposcolula, Computer Systems Engineer
          </h2>
          <p class="leading-relaxed">
            I have professional training as a computer systems engineer with a specialty in web development.</p>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700"> Workshops </span>
          <span class="mt-1 text-gray-500 text-sm">2017 - PRESENT </span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">UDEMY, PLATZI, LEARNABLE (WEB TECHNOLOGIES) </h2>
           <p class = "leading-relaxed"> As a good professional I like to be in constant development of my skills, to be able to satisfy the needs that the modern work environment demands, for that reason I have taken
             different courses and masters, such as Laravel, Vue, Flutter, Tailwin and JS Moderno.</p>
          
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: "About",
  setup() {
    onMounted(()=>{
          window.scrollTo(0, 0)
        });
  },
}
</script>