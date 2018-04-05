import mysql from 'mysql'

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "mydb"
});


con.connect(function(err) {
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
const readByStatement = (table, statment) => {

  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM " + table + " WHERE " + statment + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const readAll = (table) => {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * FROM " + table + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// const delete = (table, fields, values) =>{
//
// }
//
// const update = (table, fields, values) =>{

// }
//

export { readAll,readByStatement }
