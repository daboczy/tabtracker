const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongController = require('./controllers/SongController')
const BookmarkController = require('./controllers/BookmarkController')
const HistoryController = require('./controllers/HistoryController')

const isAuthenticated = require('./policies/isAuthenticated')


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
        isAuthenticated,
        BookmarkController.getAllBookmarks
    ); 

    app.post('/bookmarks',
        isAuthenticated,
        BookmarkController.post
    ); 

    app.delete('/bookmarks/:bookmarkId',
        isAuthenticated,
        BookmarkController.delete
    ); 



    app.get('/histories',
        isAuthenticated,
        HistoryController.getAllHistory
    ); 

    app.post('/histories',
        isAuthenticated,
        HistoryController.post
    ); 
}
