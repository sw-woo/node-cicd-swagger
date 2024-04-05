var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", {title: "Express"});
});

/**swagger 폴더에 user.swagger.js를 생성함 */
router.get("/user/users", function (req, res, next) {
	const users = [
		{id: 1, name: "유저1"},
		{id: 2, name: "유저2"},
		{id: 3, name: "유저3"},
	];
	res.json(users);
});

router.get("/user", function (req, res, next) {
	const userId = req.query.user_id;

	// 실제 코드에서는 userId를 사용하여 데이터베이스에서 사용자 정보를 가져오는 로직이 필요합니다.
	const users = [
		{id: 1, name: "유저1"},
		{id: 2, name: "유저2"},
	];

	res.json({
		ok: true,
		users: users.filter((user) => user.id === parseInt(userId)),
	});
});

/**
 * @swagger
 * /users/add:
 *   post:
 *     summary: "유저 등록"
 *     description: "POST 방식으로 유저를 등록한다."
 *     tags:
 *       - Post 방식
 *     requestBody:
 *       description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 등록)
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: "유저 고유아이디"
 *               name:
 *                 type: string
 *                 description: "유저 이름"
 *
 */
router.post("/user/add", (req, res) => {
	// 임의의 사용자 데이터 배열
	const users = [
		{id: 1, name: "유저1"},
		{id: 2, name: "유저2"},
	];
	const newUser = req.body;
	newUser.id = users.length + 1;
	users.push(newUser);
	res.json(newUser);
});

/**
 * @swagger
 * /user?user_id={user_id}:
 *   patch:
 *     summary: 사용자 정보 수정
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: user
 *         required: true
 *         description: 수정할 사용자 ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:

 *     responses:
 *       '200':
 *         description: 사용자 정보가 수정되었습니다.
 *         content:
 *           application/json:

 *     components:
 *         schemas:
 *              User:
 *                  type: object
 *         properties:
 *              id:
 *                  type: integer
 *              name:
 *                  type: string
 */
router.patch("/user", (req, res) => {
	// 임의의 사용자 데이터 배열
	const users = [
		{id: 1, name: "유저1"},
		{id: 2, name: "유저2"},
	];

	const userId = req.query.user_id;
	const updatedUser = req.body;
	const userIndex = users.findIndex((user) => user.id === parseInt(userId));
	if (userIndex !== -1) {
		users[userIndex] = {...users[userIndex], ...updatedUser};
		res.json(users[userIndex]);
	} else {
		res.status(404).json({error: "User not found"});
	}
});

/**
 * @swagger
 * /user?user_id={user_id}:
 *   delete:
 *     summary: 사용자 삭제
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              id:
 *                  type: string
 *              name:
 *                  type: string
 *         description: 삭제할 사용자 ID
 *     responses:
 *       '200':
 *         description: 사용자가 삭제되었습니다.
 *       '404':
 *         description: 사용자를 찾을 수 없습니다.
 */
router.delete("/user/:user_id", (req, res) => {
	// 임의의 사용자 데이터 배열
	const users = [
		{id: 1, name: "유저1"},
		{id: 2, name: "유저2"},
	];
	const userId = req.params.user_id;
	const userIndex = users.findIndex((user) => user.id === parseInt(userId));
	if (userIndex !== -1) {
		const deletedUser = users.splice(userIndex, 1)[0];
		deletedUser.response = "200";
		res.json(deletedUser);
	} else {
		res.status(404).json({error: "User not found"});
	}
});

router.get("/user/profile", (req, res) => {
	const member_Profile = {
		id: 1,
		name: "sungwoo",
		country: "대한민국",
	};

	res.json(member_Profile);
});

module.exports = router;
