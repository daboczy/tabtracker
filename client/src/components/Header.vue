<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <span class="home" v-on:click="navigateTo({name: 'root'})">TabTracker</span>
        </v-toolbar-title>

        <!-- TODO -->
        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <!-- this altering the btn class, so we use a different solution -->
            <!-- <router-link to="register">
                <v-btn flat dark>Sign Up</v-btn>
            </router-link> -->
            <v-btn flat dark v-on:click="navigateTo({name: 'login'})">Login</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn flat dark v-on:click="navigateTo({name: 'register'})">Sign Up</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>


<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
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
