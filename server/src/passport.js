const passport = require('passport')
const {User} = require('./models')

const config = require('./config/config')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPayLoad, done){
        try {
            const user = await User.findOne({
              where:{
                  id: jwtPayLoad.id
              }  
            })

            if (!user){
                return done(new Error(), false)
            }

            return done(null, user)
        } catch (error) {
            return done(new Error(), false)
        }
    })
)





module.exports = null