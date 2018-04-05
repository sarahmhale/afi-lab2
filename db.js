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
});

const create = (table, fields, values) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO " + table + " (" + fields + ") VALUES (" + values + ");"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

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

const deleteStatement = (table, fields, values) => {
  return new Promise((resolve, reject) => {
    let sql = "DELETE FROM " + table + " WHERE " + fields + " = " + values + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const edit = (table, fieldsAndValues, statment) => {
  return new Promise((resolve, reject) => {
    let sql = "UPDATE " + table + " SET " + fieldsAndValues + " WHERE " + statment + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

export { readAll, readByStatement, create, deleteStatement, edit }
