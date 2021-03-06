const sql = require('../config/db.config')

module.exports = {
   register: (newUser, callback) => {
      sql.query('INSERT INTO users_tb SET ?', newUser, (err, result) => {
         if (err) {
            callback(err)
         } else {
            callback(null, result)
         }
      })
   },
   login: (email, callback) => {
      sql.query(
         'SELECT * FROM users_tb WHERE email=?', 
         [email],
         (err, results) => {
            if (err) {
               callback(err)
            } else {
               callback(null, results[0])
            }
         }
      )      
   }
}