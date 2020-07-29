import Api from '@/services/Api';


export default {
    // gelAllSongs (){
    //     return Api().get('songs');
    // },

    gelAllSongs (searchStr){
        return Api().get('songs', {
            params: {
                search: searchStr
            }
        });
    },

    createSong (song){
        return Api().post('songs', song);
    },

    show (songId){
        return Api().get(`songs/${songId}`);
    },

    put (song){
        return Api().put(`songs/${song.id}`, song);
    }






}





