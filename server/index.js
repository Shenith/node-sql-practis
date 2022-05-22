const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "employeeSystem",
});

app.post("/create", (req, res) => {
	console.log(req.body);
	// const name = req.body.name;
	// const age = req.body.age;
	// const country = req.body.country;
	// const position = req.body.position;
	// const wage = req.body.wage;

	// db.query(
	// 	"INSERT INTO employee (name, age, country, position, wage) VALUES (?,?,?,?,?)",
	// 	[name, age, country, position, wage],
	// 	(err, result) => {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			res.send("Values inserted");
	// 		}
	// 	}
	// );
	res.send("Values inserted");
});

app.listen(3001, () => {
	console.log("server running on PORT 3001");
});
