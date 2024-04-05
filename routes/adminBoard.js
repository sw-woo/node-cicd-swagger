var express = require("express");

var router = express.Router();

router.get("/all", (req, res) => {
	res.render("posts");
});

router.get("/:boardId", (req, res) => {
	const boardId = req.params.boardId;

	const result = {
		boardId,
		result: "OK",
	};

	res.render(result);
});

module.exports = router;
