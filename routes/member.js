var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
	res.render("nav");
});

router.get("/all", (req, res) => {
	member = [
		{id: 1, name: "sungwoo1"},
		{id: 2, name: "sungwoo2"},
	];

	res.json(member);
});

module.exports = router;
