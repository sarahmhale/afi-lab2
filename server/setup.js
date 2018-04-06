let mysql = require('mysql');
var fs = require('fs');


let con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "mydb"
});


let queries = fs.readFileSync('./tables.sql').toString().split(';');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  setupDB(queries)

});

const setupDB = (queries) => {
  for (let i = 0; i < queries.length - 1; i++) {
    sql = queries[i] + ';'.trim();
    console.log(sql);
    con.query(sql, function(err, result) {
      if (err) throw err;
    });

  }
}
