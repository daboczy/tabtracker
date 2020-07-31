import Api from '@/services/Api';


export default {
    getAllBookmarks (bookmark){
        return Api().get('bookmarks', {
            params: bookmark
        });
    },

    post (bookmark){
        return Api().post('bookmarks', bookmark)
    },

    delete (bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}`)
    },




}





