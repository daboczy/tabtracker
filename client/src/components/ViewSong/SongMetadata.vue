<template>
    <div>
        <panel title="Song Metadata">
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
                        :to="{
                            name: 'song-edit', 
                            params(){           //dynamically change the params object song.id, anywway same as the below
                                return {
                                    songId: song.id
                                }
                            }
                        }">
                        <!-- :to="{name: 'song-edit', params: {songId: song.id}}"> -->
                        <!-- v-on:click="navigateTo({name: 'song-edit', params: {songId: song.id}})"> -->
                        Edit
                    </v-btn> 
                </v-flex>

                <!-- right side -->
                <v-flex xs6>
                    <img class="album-image" v-bind:src="song.albumImageUrl" />
                    <br>
                    {{song.album}}
                </v-flex>
            </v-layout>
        </panel>        
    </div>
</template>


<script>
//import Panel from '@/components/Panel'

export default {
    //name: 'SongMetadata',

    props: [
        'song'
    ],

    // components: {
    //     Panel
    // },

    methods: {
        navigateTo(route){
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