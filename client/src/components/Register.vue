<template>
  <div>
    <v-app>
      <v-layout column>
        <v-flex xs6 offset-xs3> 
          <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
          
            <div class="pl-4 pr-4 pt-2 pb-2">
              <form name="tabtracker-form" autocomplete="off">
                <v-text-field label="Email" v-model="email"></v-text-field>
                <br>
                <v-text-field label="Password" type="password" autocomplete="new-password" v-model="password"></v-text-field>
              </form>
              <br>
              <div class="error" v-html="error"></div>
              <br>
              <v-btn class="cyan" v-on:click="register()">Register</v-btn>
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
  name: 'Register',

  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async register(){
      //console.log(`button clicked: ${this.email} - ${this.password}`);
      
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token)    //call the vuex store obj. setToken action
        this.$store.dispatch('setUser', response.data.user)    //call the vuex store obj. setToken action        
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
  color: red;
}
</style>
