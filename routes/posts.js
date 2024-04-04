var express = require("express");
var router = express.Router();

router.get("/all", (req, res) => {
	res.render("index.ejs", {title: "오늘도 즐겁게"});
});

module.exports = router;
