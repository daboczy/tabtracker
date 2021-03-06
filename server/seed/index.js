//drop everything in the db and re-inserted
//
const {
    sequelize,
    Song,
    User,
    Bookmark,
    History
  } = require('../src/models')
  
  const Promise = require('bluebird')
  const songs = require('./songs.json')
  const users = require('./users.json')
  const bookmarks = require('./bookmarks.json')
  const histories = require('./history.json')
  
  sequelize.sync({force: true})
    .then(async function () {
      await Promise.all(
        users.map(user => {
          User.create(user)
        })
      )
  
      await Promise.all(
        songs.map(song => {
          Song.create(song)
        })
      ) 
      
      //after Song and User because Bookmark belongs those two (so before we insert in Bookmark, Song and User has to be inserted)
      await Promise.all(
        bookmarks.map(bookmark => {
          Bookmark.create(bookmark)
        })
      ) 

      //after Song and User because Bookmark belongs those two (so before we insert in History, Song and User has to be inserted)
      await Promise.all(
        histories.map(history => {
          History.create(history)
        })
      ) 
    })