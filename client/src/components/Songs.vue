<template>
  <div>
    <v-app>
      <v-layout column>
        <v-flex xs6 offset-xs3> 
            <!-- <panel /> -->  <!-- original component -->
            <panel title="Songs">
                <!-- <h3>To the Panet slot</h3>
                <p>Hi there in the slot</p> -->
                <div v-for="song in songs" :key="song.id">
                    {{song.title}} -                 
                    {{song.artist}} -                
                    {{song.album}}                
                </div>
            </panel>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'

export default {
    name: 'Songs',

    components:{
        Panel,
    },

    data() {
        return {
            songs: null
        }
    },

    async mounted(){
        //do a request to the backend for all sons
        this.songs = (await SongService.gelAllSongs()).data
    }

    
}
</script>


<style scoped
    
</style>