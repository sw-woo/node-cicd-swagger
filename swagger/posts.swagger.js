/**
 * @swagger
 *  /posts/all:
 *    get:
 *      tags:
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
