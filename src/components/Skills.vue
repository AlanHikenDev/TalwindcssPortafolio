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
</div>
<div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6 gap-4 pb-28">
  <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5" >
      <div class="text-center">
      <h2 class="mt-3 text-white text-3xl font-semibold"> What are my skills ? </h2>
      <p class="mt-3 text-white ">
       Since I started working professionally in web development more than 5 years ago, 
       I have worked on different projects and gathered different skills, both in back end and front end, 
       in pre-school work modalities and more recently at distance. 
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
          I like to code things from scratch and bring the most innovative designs of the voices to the different web platforms. 
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
    <div class="max-w-md py-4 px-8 h-3/4  bg-white shadow-lg rounded-lg my-5 sm:my-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img
          class="w-32 h-32 rounded-full mx-auto border-2 "
          src="../assets/recurso2.png"
        />
      </div>
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> BACK END </h2>
        <p class="mt-3 text-gray-600 ">
          Tailwind CSS is a highly customizable low-level CSS framework that allows you to create custom layouts 
          by removing the pre-defined component styles that you would need to overwrite anyway. 
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
          Flexible and adaptable not only to the Traditional MVC (Model view controller) 
          but to reduce code it proposes to use Routes with clousures. 
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
              <span class="  text-gray-900 uppercase" >teamwork  </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-start sm:h-7">
                <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="items-start  text-gray-900 uppercase" > passionate about code  </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > logical thinking  </span> 
            </p>
          </li> 
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
             <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > efficient   </span> 
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
             <svg class="flex-shrink-0 h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
            </span>
            <p class="ml-2">
              <span class="  text-gray-900 uppercase" > creative   </span> 
            </p>
          </li>         
        </ul>
      </div>
    </div>
  </div>

  
</div>

<div class=" bg-blue-900 grid grid-cols-1 sm:grid-cols-6  pb-28 pt-10">
 
  <div class=" col-start-1 col-end-7 sm:col-start-2 sm:col-end-4 sm:pl-14 sm:-mt-14 gap-4 pb-28 ">
    <div class=" h-3/4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> FRAMEWORKS </h2>
        <p class="mt-3 text-gray-600 ">
          I like to code things from scratch and bring the most innovative designs of the voices to the different web platforms. 
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
                    src="../assets/tailwindcss.svg"
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

  <div class="mx-auto grid col-start-1 col-end-7 sm:col-start-4 sm:col-end-6 sm:pl-14 sm:-mt-14 gap-4 pb-28 ">
    <div class=" h-3/4 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div class="text-center">
        <h2 class="mt-3 text-gray-800 text-3xl font-semibold"> DEV TOOLS </h2>
        <p class="mt-3 text-gray-600 ">
          I like to code things from scratch and bring the most innovative designs of the voices to the different web platforms. 
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
