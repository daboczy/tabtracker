import Api from '@/services/Api';


export default {
    gelAllSongs (){
        return Api().get('songs');
    },

    createSong (song){
        return Api().post('songs', song);
    }






}




