const Router = require('express');
const router = Router();

const UserRouter = require('./User.Router');
const GoodRouter = require('./Goodlinks.Router');
const NewsRouter = require('./News.Router');
const OfficialRouter = require('./Official.Router');
const HelpRouter = require('./Help.Router');

router.use('/links', GoodRouter);
router.use('/user', UserRouter);
router.use('/news', NewsRouter);
router.use('/official', OfficialRouter);
router.use('/help', HelpRouter);

module.exports = router;