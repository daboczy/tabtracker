<template>
  <div>
    <v-app>
      <v-layout column>
        <v-flex xs6 offset-xs3> 
          <panel title="Login">
              <v-text-field label="Email" v-model="email"></v-text-field>
              <br>
              <v-text-field label="Password" type="password" v-model="password"></v-text-field>
              <br>
              <div class="danger-alert" v-html="error"></div>
              <br>
              <v-btn class="cyan" v-on:click="login()">Login</v-btn>
          </panel>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService';
//import Panel from '@/components/Panel'

export default {
  name: 'Login',

  // components: {
  //   Panel
  // },  

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
        this.$store.dispatch('setToken', response.data.token)    //call the vuex store obj. setToken action
        this.$store.dispatch('setUser', response.data.user)    //call the vuex store obj. setToken action
        this.$router.push({
          name: 'songs'
        })          
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
/* .error {
  color: blue;
} */
</style>
