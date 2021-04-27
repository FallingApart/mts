const Router = require('express');
const router = Router();

const UserRouter = require('./User.Router');
const GoodRouter = require('./Goodlinks.Router');
const NewsRouter = require('./News.Router');

router.use('/links', GoodRouter);
router.use('/user', UserRouter);
router.use('/news', NewsRouter);

module.exports = router;