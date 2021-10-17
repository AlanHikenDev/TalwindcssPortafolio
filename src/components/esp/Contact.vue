<script >
import axios from "axios";
import { ref } from 'vue';
export default {
    name: 'CONTACTO',
    components: {

      },
      setup () {
          
       const valid = ref(false);
       const messagesend = ref(true);
       let email = null;
       let mensaje = null; 
       function sendMessasWatssap(){
          console.log('enviando msjh')
          // cambiar entre web y api para ver los resultados
          window.open(
            `https://api.whatsapp.com/send?phone=${'5219511850348'}&text=${'Some one txt'}`,
            '_blank'
          );
        }
        function consultaAbd(){
          axios({
            method: 'get',
            url: 'https://ticsoaxaca.com/api/getcontactos',
            responseType: 'stream'
          })
            .then(function (response) {
              console.log(response)
              //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            });
        }
        function enviarMensaje(){
          axios({
            method: 'post',
            url: 'https://ticsoaxaca.com/api/savecontacto',
            data: {
              email: this.email,
              file: "N/A",
              mensaje: this.mensaje,
              nombre: "portafolio",
              subject: "en ingles",
              telefono: "777",
            }
          }).then(response => {
              //this.info = response.data.bpi
              console.log(response)
              if (response.status == 200){
                console.log('registro correcto')
                this.messagesend =false;
              }else{
                 this.valid = true;
              }
            }).catch(error => {
              console.log(error)
              this.valid = true
            })
        }
        return {
          // schema,
          consultaAbd,
          sendMessasWatssap,
          enviarMensaje,
          valid,
          email: null,
          file: "N/A",
          mensaje: null,
          nombre: "portafolio",
          subject: "asas",
          telefono: "777",
          //form validate 
          messagesend,
        }
      },
    
}

</script>

<template>
  <div class="col-span-6 sm:col-start-3 sm:col-end-7 px-4 pt-7 text-center">
    <div class="col-start-1 col-end-7 sm:col-start-3 sm:col-end-5 px-4 pt-7 pb-5 mb-5">
      <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-900 text-2xl sm:text-5xl"
      >CONTACT</p>
    </div>
  </div>
  <div v-if="messagesend" class="bg-gray-100  flex justify-center items-center">
    <div
      action
      class="max-w-lg border border-gray-200 shadow-xs mx-auto rounded-lg p-10 bg-white text-center space-y-6 flex-grow"
    >
      <div class="flex flex-col">
        <label for="email" class="self-start mb-2 font-medium text-gray-800">Enter your email </label>
        <input
          type="text"
          v-model="email"
          placeholder="type your email"
          class="px-2 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded"
          autocomplete="off"
        />
        <div v-if="valid" class="bg-red-100 border mt-3 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Required!</strong>
          <span class="block sm:inline">Please enter your email correctly.</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
      </div>
      <div class="flex flex-col">
        <label for="pass" class="self-start mb-2 font-medium text-gray-800">Message </label>
        <textarea id="about" v-model="mensaje" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="don't be shy talk to me "></textarea> 
        <div v-if="valid" class="bg-red-100 border mt-3 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong class="font-bold">Required !</strong>
          <span class="block sm:inline">please indicate the subject .</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>    
      </div>

      <button v-on:click="enviarMensaje" class="w-full bg-indigo-300 py-2 rounded font-semibold">Send</button>
      <div class="flex items-center text-gray-800">
        <span class="block border border-gray-200 w-1/3 mr-2"></span>
        contact me with 
        <span class="block border border-gray-200 w-1/3 ml-2"></span>
      </div>
      <div class="flex justify-around text-center divide-x divide-gray-300">
        <a href="http://facebook.com" target="blank" class="mx-auto w-16 h-16  p-1 cursor-pointer">
          <img src="../../assets/imgs/facebook-logo-3-1.png" alt="facebook" class />
        </a>
        <a href="#" v-on:click="sendMessasWatssap" class="mx-auto w-16 h-16 p-1 cursor-pointer">
          <img src="../../assets/imgs/wats.png" alt="watsapp" class="mx-auto" />
        </a>
        <a href="https://github.com/" target="blank" class="mx-auto w-16 h-16 p-1 cursor-pointer">
          <img src="../../assets/imgs/25231.png" alt="github" class />
        </a>
      </div>
    </div>
  </div>
   <div v-else class="bg-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
    
    <div class="col-span-1 sm:col-span-3 px-4 pt-7 text-center">
      <span class=" font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-900 text-2xl sm:text-5xl"> THANKS </span>
    </div>
    <div class="col-span-1 sm:col-span-3">
    <div class="flex justify-around text-center divide-x divide-gray-300">
        <a href="http://facebook.com" target="blank" class="mx-auto w-16 h-16  p-1 cursor-pointer">
          <img src="../../assets/imgs/facebook-logo-3-1.png" alt="facebook" class />
        </a>
        <a href="#" v-on:click="sendMessasWatssap" class="mx-auto w-16 h-16 p-1 cursor-pointer">
          <img src="../../assets/imgs/wats.png" alt="watsapp" class="mx-auto" />
        </a>
        <a href="https://github.com/" target="blank" class="mx-auto w-16 h-16 p-1 cursor-pointer">
          <img src="../../assets/imgs/25231.png" alt="github" class />
        </a>
    </div>
    </div>
   </div> 
</template>

<style scoped>
</style>
