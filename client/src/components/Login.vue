<template>
  <div>
    <v-app>
      <v-layout column>
        <v-flex xs6 offset-xs3> 
          <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
          
            <div class="pl-4 pr-4 pt-2 pb-2">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <br>
              <v-text-field label="Password" v-model="password"></v-text-field>
              <br>
              <div class="error" v-html="error"></div>
              <br>
              <v-btn class="cyan" v-on:click="login()">Login</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'Login',

  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login(){
      //console.log(`button clicked: ${this.email} - ${this.password}`);
      
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error
      }

      //console.log(response.data);
    }
  },

  // watch: {
  //   email (value){
  //     console.log('email has changed');
  //   }
  // },

  // mounted() {
  //   setTimeout( () =>{
  //     this.email = 'admin@helloworld.com';
  //   }, 2000)
  // },


}
</script>


<style scoped>
.error {
  color: blue;
}
</style>
