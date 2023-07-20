const router = require('express').Router();
const mainRouter = require('./main.route');

router.use('/', mainRouter);

module.exports = router;
