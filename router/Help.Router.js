const Router = require('express');
const HelpController = require('../controller/HelpController');
const router = new Router();


router.post('/post', HelpController.createHelp);


module.exports = router;