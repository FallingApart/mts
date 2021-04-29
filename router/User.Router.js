const Router = require('express');
const UserController = require('../controller/UserConroller');
const router = new Router();


router.post('/rega', UserController.registration);
router.post('/login', UserController.findOneUser);


module.exports = router;