const {Song} = require('../models')


module.exports = {
  // async gelAllSongs (req, res) {
  //   try {
  //     const songs = await Song.findAll({
  //       limit: 10
  //     })
  //     res.send(songs)
  //   } catch (err) {
  //     res.status(500).send({
  //       error: 'An error has occured trying to fetch the songs'
  //     })
  //   }
  // },

  async gelAllSongs (req, res) {
    try {
      let songs = null
      const searchStr = req.query.search
      if (searchStr){
        songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map( (key) => ({
              [key]: {
                $like: `%${searchStr}%`
              }
            }))
          }
        })
      }else{
        songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },


  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song ' + err
      })
    }
  },


  async show (req, res) {
    try {
      const songs = await Song.findById(req.params.songId)
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the songs'
      })
    }
  },


  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the song ' + err
      })
    }
  },



}