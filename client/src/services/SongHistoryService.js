import Api from '@/services/Api';


export default {
    getAllHistory (params){
        return Api().get('histories', {
            params: params
        });
    },

    post (history){
        return Api().post('histories', history)
    },

 



}





