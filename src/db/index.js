// mysql.js 혹은 db/index.js
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'codibuddy.cxthjaiaaicn.ap-northeast-2.rds.amazonaws.com',
  user     : 'codibuddy_5',
  password : 'codibuddy123',
  database : 'codibuddy_schema'
});

connection.connect();

connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();