const router = require('express').Router();
const rateRouter = require('./views/rate.route');
const mainRouter = require('./views/main.route');
// const authRouter = require('./views/auth.route');

// router.use('/auth', authRouter);

router.use('/rate', rateRouter);
router.use('/', mainRouter);

module.exports = router;
