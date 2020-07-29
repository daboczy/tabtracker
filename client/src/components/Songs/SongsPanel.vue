<template>
  <div>
    <!-- <panel /> -->  <!-- original component -->
    <panel title="Songs">
        <v-btn slot="action"
                v-on:click="navigatTo({name: 'songs-create'})"
                class="cyan accent-2" 
                light 
                medium 
                absolute 
                right 
                middle 
                fab>
        <v-icon>add</v-icon>
        </v-btn>

        <!-- <h3>To the Panet slot</h3>
        <p>Hi there in the slot</p> -->
        <div class="song" v-for="song in songs" :key="song.id">
            <v-layout>
            <!-- left side -->
            <v-flex xs6>
                <div class="song-title">
                {{song.title}}
                </div>
                <div class="song-artist">
                {{song.artist}}
                </div>
                <div class="song-genre">
                {{song.genre}}
                </div>

                <v-btn
                    dark
                    class="cyan"
                    v-on:click="navigatTo({name: 'song', params: {songId: song.id}})">
                    View Song
                </v-btn>   
            </v-flex>

            <!-- right side -->
            <v-flex xs6>
                <img class="album-image" v-bind:src="song.albumImageUrl" />
            </v-flex>
            </v-layout>
                                            
        </div>
    </panel>
  </div>
</template>


<script>
import SongService from '@/services/SongService'
//import Panel from '@/components/Panel'

export default {
    name: 'Songs',

    // components:{
    //     Panel,
    // },

    data() {
        return {
            songs: null
        }
    },

    //after the watch-er has been implemented there is no more mounted needed
    // async mounted(){
    //     //do a request to the backend for all sons
    //     this.songs = (await SongService.gelAllSongs()).data
    // },

    methods: {
      navigatTo(route){
        this.$router.push(route)
      }
    },

    watch: {
      //listening for the url / route query string
      '$route.query.search': {
        immediate: true,
        async handler(value){
           this.songs = (await SongService.gelAllSongs(value)).data
        }
      }
    },

    
}
</script>


<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.album-image {
  width: 50%;
  margin: 0 auto;
}  

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
} 

.album-genre {
  font-size: 18px;
}   
</style>