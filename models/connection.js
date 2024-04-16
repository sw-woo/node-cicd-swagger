const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.MYSQL_PASSWORD,
	database: "portfolio",
});

connection.connect((err) => {
	if (err) throw err;
	console.log("Connected to database");
});

module.exports = connection;

// connection.query("SELECT * FROM projects", (err, rows) => {
// 	if (err) throw err;
// 	console.log(rows);
// }))
