const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongController = require('./controllers/SongController')



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




}
