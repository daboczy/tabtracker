<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>

            <slot name="action"/>       <!-- add btn add here from songs component -->

        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>  <!-- slot for if you would pass content from the parnet for eg from Song.vue -->
                No slot content
            </slot>
        </div>
    </div>
</template>


<script>
export default {
    props: [
        'title'
    ]
}
</script>


<style scoped
    
</style>