<template>
  <div>
    <v-app>
      <v-layout column>
        <v-flex xs6 offset-xs3> 
          <songs-search-panel />
          <songs-panel class="mt-2"/>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongService from '@/services/SongService'
//import Panel from '@/components/Panel'

export default {
    name: 'Songs',

    components:{
        //Panel,
        SongsPanel,
        SongsSearchPanel
    },

    data() {
        return {
            songs: null
        }
    },

    async mounted(){
        //do a request to the backend for all sons
        this.songs = (await SongService.gelAllSongs()).data
    },

    methods: {
      navigatTo(route){
        this.$router.push(route)
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