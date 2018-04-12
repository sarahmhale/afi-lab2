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

const createPerson = (name, townID) => {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO person (name,townID) VALUES ('" + name + "'," + townID + ");"

    console.log(sql);
    con.query(sql, (err, results) => {
      if (err) reject(err);

      console.log(results)

      resolve({
        personID: results.insertId,
        name: name,
        townID: townID
      });
    });
  });
}

const getIdFromLastInsert = () => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT LAST_INSERT_ID()'


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

const deleteByStatement = (table, statement) => {
  return new Promise((resolve, reject) => {
    let sql = "DELETE FROM " + table + " WHERE " + statement + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

const update = (table, fieldsAndValues, statment) => {
  return new Promise((resolve, reject) => {
    let sql = "UPDATE " + table + " SET " + fieldsAndValues + " WHERE " + statment + ";"
    con.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
}

export { readAll, readByStatement, create, deleteByStatement, update, createPerson }
