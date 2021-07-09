const mysql = require('mysql')
const connection = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: '',
  // database: 'pos_app',
  // timezone: 'UTC'
  host: '54.205.184.83',
  port: 3306,
  user: 'golden',
  password: 'password',
  database: 'pos_app',
  timezone: 'UTC'
})

connection.connect((error) => {
  if (error) {
    throw error
  }
  console.log('You are now conected ...')
})

module.exports = connection
