<template>
  <div class="flex flex-col justify-center sm:py-12">
    <div class="relative py-3 mx-auto sm:max-w-xl sm:mx-auto">
      <img src="../assets/g19.png" />
    </div>
  </div>

  <div class="flex flex-col justify-center sm:py-12">
    <div class="relative  py-3 mx-auto sm:max-w-xl sm:mx-auto text-center pt-4 sm:pt-1">
      <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl ">Hi, Im Alan ,Web Developer</p>
      
      <p class="font-bold mx-auto pt-1 sm:pt-2" >
        I design and code beautifully simple things, and I love what I do.
      </p>
    </div>
  </div>

  <div class="bg-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
    
    <div class="col-span-1 sm:col-span-3 px-4 pt-7 text-center">
      <span class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-900 text-2xl sm:text-5xl"> I work with </span>
    </div>

    <div class="px-4 ">
      <div class="max-w-md h-80 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-32 h-32 rounded-full mx-auto border-2 "
            src="../assets/logo-vue.png"
          />
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> VUEJS </h2>
          <p class="mt-3 text-gray-600 ">
            This may not be a great feature, but the 18 KB that this framework weighs makes 
            it ideal for a quick download and to be able to store it on low memory devices, 
            positively impacting your SEO and UX. 
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 ">
      <div class="max-w-md py-4 px-8 h-80 bg-white shadow-lg rounded-lg my-5 sm:my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-32 h-32 rounded-full mx-auto border-2 "
            src="../assets/tailwindcss.SVG"
          />
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold">TAILWIND CSS</h2>
          <p class="mt-3 text-gray-600 ">
            Tailwind CSS is a highly customizable low-level CSS framework that allows you to create custom layouts 
            by removing the pre-defined component styles that you would need to overwrite anyway. 
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 ">
      <div class="max-w-md py-4 px-8 h-92 sm:h-80  bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-32 h-32 rounded-full mx-auto border-2 "
            src="../assets/1200px-Laravel.png"
          />
        </div>
        <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold">LARAVEL</h2>
          <p class="mt-3 text-gray-600 ">
            Flexible and adaptable not only to the Traditional MVC (Model view controller) 
            but to reduce code it proposes to use Routes with clousures. It is modular and with a 
            wide package and driver systems with which the functionality can be extended easily,
            robustly and safely.
          </p>
        </div>
      </div>
    </div>
    
    
    </div>
    <!-- me myself and i -->
    <div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6 gap-4 ">
    
      <div class=" col-span-6 sm:col-start-3 col-end-7 px-4 pt-7 text-center">
        <div class="max-w-sm ">
          <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl ">Me, Myself <br> and I</p>  
        </div>
      </div>

      <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
        <div class="py-4 px-8 bg-white shadow-lg rounded-lg"> <div class="text-center">
          <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> WHO I AM ?</h2>
          <p class="mt-3 text-gray-600 ">
            I am passionate about technology in general with a love for web development, 
            since my first approach with a computer in 2000, I was fascinated with the growth 
            possibilities that computers offer and began my journey towards the wonderful world of development .
          </p>
        </div>
        </div> 
      </div>
    </div>

</template>

<script>
export default {
  name: "Home",
};
</script>
