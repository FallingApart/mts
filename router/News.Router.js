const Router = require('express');
const NewsController = require('../controller/NewsController');
const router = new Router();


router.post('/post', NewsController.createNews);


module.exports = router;