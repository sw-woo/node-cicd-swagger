// /user/users 전체 유저정보 조회
/**
 * @swagger
 * paths:
 *  /user/users:
 *    get:
 *      summary: "유저 데이터 전체조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 전체 유저 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *
 *
 */

/**
 * @swagger
 *  /posts/all:
 *    get:
 *      tags:
 *
 *      description: 모든 아티클 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: 아티클 번호
 *          required: false
 *          schema:
 *            type: integer
 *            description: 게시글 번호
 *      responses:
 *       200:
 *        description: 게시글 조회 성공
 *       400:
 *        description: 게시글 요청 실패
 */

/**
 * @swagger
 * /user?user_id={user_id}:
 *   get:
 *     summary: "특정 유저조회 Query 방식"
 *     description: "요청 경로에 값을 담아 서버에 보낸다."
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: user_id
 *         required: true
 *         description: 유저 아이디
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 조회)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 users:
 *                   type: object
 *                   example: [{ "id": 1, "name": "유저1" }]
 */
