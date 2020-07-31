const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongController = require('./controllers/SongController')
const BookmarkController = require('./controllers/BookmarkController')



module.exports = (app) => {

    //rest api using controllers
    app.post('/register',
        AuthenticationControllerPolicy.register, 
        AuthenticationController.register
    ); 

    app.post('/login',
        AuthenticationController.login
    ); 

    app.get('/songs',
        SongController.gelAllSongs
    ); 

    app.post('/songs',
        SongController.createSong
    ); 

    app.get('/songs/:songId',
        SongController.show
    );     

    app.put('/songs/:songId',
        SongController.put
    );     


    app.get('/bookmarks',
        BookmarkController.getAllBookmarks
    ); 

    app.post('/bookmarks',
        BookmarkController.post
    ); 

    app.delete('/bookmarks/:bookmarkId',
        BookmarkController.delete
    ); 


}
