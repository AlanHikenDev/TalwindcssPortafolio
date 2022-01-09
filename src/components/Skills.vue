<script setup>
defineProps({

  msg: {
      type: String,
      default: 'My skills'
    }
})

</script>

<template>
<div>
<div class=" col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
  <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
    <p class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl ">MY SKILLS</p> 
  </div>
</div><div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6 gap-4 pb-28">
  <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
      <div class="text-center">
      <h2 class="mt-3 text-white text-3xl font-semibold"> What are my Skills? </h2>
      <p class="mt-3 text-white ">
       Throughout my professional training I have developed a set of skills that allow me to design, develop, design and create applications and web pages for the internet and intranet.
        I have a correct knowledge of the software architecture from the database to the user interface which allows me to offer complete solutions.
      </p>
    </div> 
  </div>
</div>

<div class="bg-gray-800 grid grid-cols-1 sm:grid-cols-3 ">
 
  <div class="sm:pl-14 sm:-mt-32 ">
    <div class="max-w-md h-3/4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img class="w-32 h-32 rounded-full mx-auto border-2 " src="../assets/recurso1.png" />
      </div>
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> FRONT END </h2>
        <p class="mt-3 text-gray-600 ">
         To comply with the design and visual style definitions that different projects may require, I work with the following programming languages that allow me to offer a solution in modern and elegant interfaces.
        </p>
        <h2 class="mt-3 text-gray-800 text-1 font-semibold"> Languages </h2>
        <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/html.png"
                  />
                </span>
                <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Html </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/logo-css3.png"
                  />
                </span>
                <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Css </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                    <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/sas2.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Sass </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                 <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Js </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/Typescript.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" >  TypeScript </span> 
                </p>
              </li>
            </ul>
      </div>
    </div>
  </div>

  <div class="sm:-mt-32">
    <div class="py-4 px-8  bg-white shadow-lg rounded-lg my-5 sm:my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-32 h-32 rounded-full mx-auto border-2 "
          src="../assets/recurso2.png"
        />
      </div>
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> BACK END </h2>
        <p class="mt-3 text-gray-600 ">
          As a Back-end developer I am qualified to be responsible for the programming of the logic and the
           solutions so that all the actions requested by in a web page are executed correctly.
           A solid knowledge in managing the most common and most powerful servers to process information.
        </p>
        <h2 class="mt-3 text-gray-800 text-1 font-semibold"> Languages </h2>
        <ul class="list-disc space-y-2">
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/PHP-logo.svg.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Php </span> 
            </p>
          </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/java8_logo.webp"
                  />
                </span>
                <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Java 8 </span> 
                </p>
              </li>
               <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                 <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/1200px-Unofficial_JavaScript_logo_2.svg.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Js </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/Typescript.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" >  TypeScript </span> 
                </p>
              </li>
            </ul>
      </div>
    </div>
  </div>

  <div class="sm:pr-14 sm:-mt-32">
    <div class="max-w-md py-4 px-8  bg-white shadow-lg rounded-lg my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-32 h-32 rounded-full mx-auto border-2 "
          src="../assets/recurso3.png"
        />
      </div>
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> DEV SKILLS</h2>
        <p class="mt-3 text-gray-600 ">
          An excellent knowledge of the most common and efficient programming methodologies,
           a determination to stay focused during periods of development and high capacity for
           concentration.
        </p>
        <h2 class="mt-3 text-gray-800 text-1 font-semibold"> Languages </h2>
        <ul class="list-disc space-y-2">
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
                <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" >Trabajo en equipo  </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-start sm:h-7">
                <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="items-start  text-gray-900 uppercase" > Apasionado por el codigo    </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Pensamiento lógico </span> 
            </p>
          </li> 
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
             <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Eficiente   </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
             <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Creativo   </span> 
            </p>
          </li>         
        </ul>
      </div>
    </div>
  </div>

</div>

<div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6  pb-10 pt-10">
 
  <div class=" col-start-1 col-end-7 sm:col-start-2 sm:col-end-4 sm:pl-14 -mt-20 sm:-mt-10 gap-2  ">
    <div class=" py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> FRAMEWORKS </h2>
        <p class="mt-3 text-gray-600 ">
          Starting from a base structure to develop projects with specific objectives that is knowledge in frameworks,
           for this I specialize in frameworks that allow a faster and more efficient development that allows me to offer products with a long
           duration and easy maintenance.
        </p>
        <ul class="list-disc space-y-2 ">
              <li class="flex items-start ">
                <span class="h-6 flex items-center sm:h-7">
                 <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/vuejs.png"
                  />
                </span>
                <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > VUE JS </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/laravel.png"
                  />
                </span>
                <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Laravel </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/vuetify.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > vuetify </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                 <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/electron.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" >  electron </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/tailwind.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > tailwindcss </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/Bootstrap_logo.svg.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > Bootstrap </span> 
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/nativevue.png"
                  />
                </span>
                 <p class="ml-2">
                  <span class="  text-gray-900 uppercase" > NativeScript </span> 
                </p>
              </li>
            </ul>
      </div>
    </div>
    
  </div>

  <div class="mx-auto grid col-start-1 col-end-7 sm:col-start-4 sm:col-end-6 sm:pl-14 -mt-20 sm:-mt-10 gap-4 pb-10 ">
    <div class=" h-3/4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> DEV TOOLS </h2>
        <p class="mt-3 text-gray-600 pb-3 pt-2">
         The tools that every developer should master and more.
        </p>
        <ul class="list-disc space-y-2 ">
           <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
               <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > git, gitlab, etc  </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
               <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/scrum.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Scrum </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/2560px-Npm-logo.svg.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > npm  </span> 
            </p>
          </li> 
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/langs/Jira.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > JIRA </span> 
            </p>
          </li> 
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/kisspng-webpack.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > webpack </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > NODEJS </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > vscode </span> 
            </p>
          </li> 
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/pngegg.png"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > eclipse </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <img
                    class="lex-shrink-0 h-5 w-5  "
                    src="../assets/frameworks/logo-vite.svg"
                  />
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > Vite </span> 
            </p>
          </li>           
        </ul>

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
