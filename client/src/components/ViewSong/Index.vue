<template>
    <div>
			<v-layout>
				<!-- outer layout left side -->
				<v-flex xs6>
					<song-metadata v-bind:song="song" />
				</v-flex>

				<v-flex xs6 class="ml-2">
					<you-tube v-bind:youtubeId="song.youtubeId" />
				</v-flex>
			</v-layout>

			<v-layout class="mt-2">
				<v-flex xs6>
          <tab v-bind:song="song" />
				</v-flex>

				<v-flex xs6 class="ml-2">
					<lyrics v-bind:song="song" />
				</v-flex>
			</v-layout>
    </div>
</template>


<script>
import SongService from '@/services/SongService'
//import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
    name: 'ViewSong',

    components:{
        //Panel,
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
    },    

    data() {
        return {
            song: {}
        }
    },

    async mounted() {
        const songId = this.$store.state.route.params.songId        //in main.js we sync the router to the vuex store. whenever the router is changes in the ui we can reach it in the store
        this.song = (await SongService.show(songId)).data
        //console.log(song)
    },

    
}
</script>



<style scoped>

</style>