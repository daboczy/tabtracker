import Api from '@/services/Api';


export default {
    gelAllSongs (){
        return Api().get('songs');
    }






}





