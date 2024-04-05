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

	res.json(result);
});

// router.get("/?boardId=boardId", (req, res) => {
// 	const boardId = req.query.boardId;

// 	const result = {
// 		boardId,
// 		result: "OK",
// 	};

// 	res.json(result);
// });

module.exports = router;
