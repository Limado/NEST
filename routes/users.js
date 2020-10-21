var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/**
* @swagger
* /users/login:
*  post:
*    description: Loguea un usuario al sistema
*    produces: 
*       - application/json
*    parameters:
*       - name: name
*         in: formData
*         schema:
*           type: string
*         required: true
*       - name: password
*         in: formData
*         schema:
*           type: password
*         required: true
*    responses:
*      '200':
*        description: Todo bien
*/

router.post('/login', usersController.login);

module.exports = router;
