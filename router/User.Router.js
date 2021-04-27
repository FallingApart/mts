const Router = require('express');
const UserController = require('../controller/UserConroller');
const router = new Router();


router.post('/post', UserController.createUser);


module.exports = router;