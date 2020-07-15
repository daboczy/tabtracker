<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span 
                class="home" 
                v-on:click="navigateTo({name: 'root'})">
                TabTracker
            </span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn 
                flat 
                dark 
                v-on:click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>
        
        <v-spacer></v-spacer>

        <v-toolbar-items>
            <!-- this <router-link to="register"> altering the btn class, so we use a different solution with methods, using the router resources -->
            <!-- <router-link to="register">
                <v-btn flat dark>Sign Up</v-btn>
            </router-link> -->
            <v-btn 
                v-if="!$store.state.isUserLoggedIn"
                flat 
                dark 
                v-on:click="navigateTo({name: 'login'})">
                Login
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn" 
                flat 
                dark 
                v-on:click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn
                v-if="$store.state.isUserLoggedIn" 
                flat 
                dark 
                v-on:click="logout()">
                Log Out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>


<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        },

        logout(){
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.navigateTo({
                name: 'root'
            })
        }

    }
}
</script>


<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: #E9E;
}
</style>
