const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

//Sequelize consturctor
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
) 

//read all of the model files from models folder except index.js
//we can acces all the modules in the db object and also the Sequelize and sequelize object
fs
    .readdirSync(__dirname)
    .filter( (file) => file !== 'index.js' )
    .forEach( (file) => {
        const model = sequelize.import(path.join(__dirname, file))
        //const model = sequelize['import'](path.join(__dirname, file))
        //eg.: db.User
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db
