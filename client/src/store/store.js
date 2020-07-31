//global state of the application
import Vue from 'vue'
import Vuex from 'vuex'

//this component and plugin help to store the state of the vuex => for eg if the page is refreshed all of the data will remain (login) 
import createPersistedState from "vuex-persistedstate";

 
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,

    plugins: [
        createPersistedState()
    ], 

    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },

    mutations:{
        setToken(state, token){
            state.token = token
            if (token){
                state.isUserLoggedIn = true
            }else{
                state.isUserLoggedIn = false
            }
        },

        setUser(state, user){
            state.user = user
        }
    },

    actions: {
        setToken({commit}, token){
            commit('setToken', token)       //async calls
        },

        setUser({commit}, user){
            commit('setUser', user)       //async calls
        }
    }


})