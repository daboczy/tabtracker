<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <panel title="Song Metadata">
                    <v-text-field 
                        label="Title"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.title"
                    ></v-text-field>

                    <v-text-field 
                        label="Artisr"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.artist"
                    ></v-text-field>

                    <v-text-field 
                        label="Genre"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.genre"
                    ></v-text-field>

                    <v-text-field 
                        label="Album"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.album"
                    ></v-text-field>

                    <v-text-field 
                        label="Album image URL"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.albumImageUrl"
                    ></v-text-field>

                    <v-text-field 
                        label="Youtube ID"
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.youtubeId"
                    ></v-text-field>
                </panel>
            </v-flex>

            <v-flex xs8>
                <panel title="Song structure" class="ml-2">
                    <v-text-field 
                        label="Tab"
                        multi-line
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.tab"
                    ></v-text-field>

                    <v-text-field 
                        label="Lyrics"
                        multi-line
                        required
                        v-bind:rules="[rules.required]"
                        v-model="song.lyrics"
                    ></v-text-field>  
                </panel> 

                <div>
                    <span class="danger-alert" v-if="errorMsg">{{errorMsg}}</span>
                </div>

                <v-btn
                    dark
                    class="cyan"
                    v-on:click="save">
                    Save Song
                </v-btn>             
            </v-flex>
        </v-layout>   
    </div>
</template>


<script>
//import Panel from '@/components/Panel'
import SongService from '@/services/SongService'


export default {
    // components:{
    //     Panel
    // },

    data() {
        return {
            song:{
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                lyrics: null,
                tab: null
            },

            rules: {
                required: (value) => !!value || 'Required'
            },

            errorMsg: null
        }
    },

    methods: {
        async save(){
            this.errorMsg = null

            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every( (key) => !!this.song[key] )
            
            if (!areAllFieldsFilledIn){
                this.errorMsg = 'Please fill the all required fields!'
                return
            }

            try {
                const songId = this.$store.state.route.params.songId 
                await SongService.put(this.song)
                this.$router.push({
                    name: 'song',
                    params: {songId: songId}
                })
            } catch (error) {
                console.log(error)
            }
        }
    },

    async mounted() {
        //call API
        try {
            const songId = this.$store.state.route.params.songId        //in main.js we sync the router to the vuex store. whenever the router is changes in the ui we can reach it in the store
            this.song = (await SongService.show(songId)).data
        } catch (error) {
            console.log(error)
        }     
    },
}



</script>


<style scoped
    
</style>