const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


//helper function
function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}


// function comparePwd(candidatePassword, pwd){
//     console.log('comparePwd', candidatePassword, pwd)

//     return bcrypt
//         .genSaltAsync(8)
//         .then(salt => bcrypt.hashAsync(candidatePassword, salt, null))
//         .then(hash => {
//             console.log('hash ', hash)
//             console.log('pwd ', pwd)

//             //if (hash === pwd){
//                 return true
//             //}
            
//             //return false
//         })
// }


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (candidatePassword) {
    return bcrypt.compareAsync(candidatePassword, this.password)
    //return comparePwd(candidatePassword, this.password)
  }

  User.associate = function (models) {
  }

  return User
}
