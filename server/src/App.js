const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const {sequelize} = require('./models');

const config = require('./config/config');

require('./passport')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//pass the app = routes.js return a function and attached to the app
require('./routes')(app)

//ORM Object-relational mapping in computer science is a programming technique for converting data between 
//incompatible type systems using object-oriented programming languages. This creates, in effect, a 
//"virtual object database" that can be used from within the programming language.
//Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. 
//It features solid transaction support, relations, eager and lazy loading, read replication and more.
//sequelize.sync( {force: true} ) //=> drops all the tables
sequelize.sync({force: false})
    .then( ()=> {
        //listen
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })





