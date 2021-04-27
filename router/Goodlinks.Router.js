const Router = require('express');
const GoodlinksController = require('../controller/GoodLinksController');
const router = new Router();


router.post('/post', GoodlinksController.GoodLink);


module.exports = router;