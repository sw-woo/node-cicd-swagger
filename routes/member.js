var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
	res.render("nav");
});

router.get("/all", (req, res) => {
	member = [
		{id: 1, name: "sungwoo1"},
		{id: 2, name: "sungwoo2"},
		{id: 3, name: "sungwoo1"},
		{id: 4, name: "sungwoo2"},
		{id: 5, name: "sungwoo2"},
		{id: 6, name: "sungwoo1"},
		{id: 7, name: "sungwoo2"},
	];

	res.json(member);
});

module.exports = router;
