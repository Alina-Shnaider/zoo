const router = require('express').Router();
const mainRouter = require('./main.route');
const animalsRouter = require('./animals.route');

router.use('/', mainRouter);
router.use('/animals', animalsRouter)

module.exports = router;
