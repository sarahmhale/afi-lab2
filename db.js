let mysql = require('mysql');

let db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "mydb"
});


db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// const create = (table, fields, values) => {
//   let sql = "INSERT INTO " + table + " (" + fields + ") VALUES (" + values + ");"
//   console.log(sql)
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// }
//
// const read = (table, statment) => {
//   let sql = "SELECT * FROM " + table + " WHERE " + statment + ";"
//   console.log(sql)
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
//
// }
//
// const readAll = (table) => {
//   let sql = "SELECT * FROM " + table + ";"
//   console.log(sql)
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// }

// const delete = (table, fields, values) =>{
//
// }
//
// const update = (table, fields, values) =>{

// }
//

export default db
