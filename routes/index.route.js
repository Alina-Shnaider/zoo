const router = require('express').Router();
const rateRouter = require('./views/adminRate.route');
const mainRouter = require('./views/main.route');
const animalsRouter = require('./api/animals.route');
const adminRouter = require('./views/admin.route');
const apiAdm = require('./api/apiAdminRate');
const apiAnimalsRouter = require('./api/animals.route')
// const authRouter = require('./views/auth.route');

// router.use('/auth', authRouter);
router.use('/', mainRouter);
router.use('/admin', adminRouter);
router.use('/adminRate', rateRouter);
router.use('/animals', animalsRouter);
router.use('/api/adminRate', apiAdm);
router.use('api/animals', apiAnimalsRouter)
module.exports = router;
