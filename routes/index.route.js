const router = require('express').Router();
const rateRouter = require('./views/rate.route');
const mainRouter = require('./views/main.route');
const animalsRouter = require('./views/animals.route');
// const authRouter = require('./views/auth.route');

// router.use('/auth', authRouter);
router.use('/', mainRouter);
router.use('/rate', rateRouter);
router.use('/animals', animalsRouter);

module.exports = router;
