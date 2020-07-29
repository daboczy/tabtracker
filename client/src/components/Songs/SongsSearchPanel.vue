<template>
    <div>
        <panel title="Search">
            <v-text-field 
                label="Search by song title, artist, album or genre"
                v-model="search">
            </v-text-field>
        </panel>
    </div>
</template>


<script>
import _ from 'lodash'

export default {
    data() {
        return {
            search: ''
        }
    },

    watch: {
        //lodash helper: helper object looping arrays. for eg.: after we finished typing in the watch(er), it will wait 700 ms to trigger
        search: _.debounce(async function(value){
            const route = {
                name: 'songs'
            }
            if (this.search !== ''){
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }, 700),

        //wather to the search query string (immediate: true will trigger the handler immediately)
        '$route.query.search': {
            immediate: true,
            handler(value){
                this.search = value
            }
            
        }
    },  
    
}
</script>


<style scoped>
    
</style>