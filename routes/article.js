var express = require("express");

var router = express.Router();

router.get("/all", (req, res) => {
	res.render("posts");
});

module.exports = router;
