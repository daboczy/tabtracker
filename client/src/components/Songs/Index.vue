<template>
  <div>
    <v-app>
      <v-layout>
        <v-flex xs6 v-if="isUserLoggedIn">
          <songs-bookmarks />
          <recently-viewed-songs class="mt-2" />
        </v-flex>

        <v-flex :class="{xs12: !isUserLoggedIn, xs6: isUserLoggedIn}" class="ml-2"> 
          <songs-search-panel />
          <songs-panel class="mt-2"/>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>


<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsSearchPanel from './SongsSearchPanel'
import SongService from '@/services/SongService'
//import Panel from '@/components/Panel'
import {mapState} from 'vuex'

export default {
    name: 'Songs',

    components:{
        //Panel,
        SongsPanel,
        SongsSearchPanel,
        SongsBookmarks,
        RecentlyViewedSongs
    },

    computed: {
      ...mapState([
          'isUserLoggedIn',
          'user'
      ])
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