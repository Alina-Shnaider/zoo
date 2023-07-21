const router = require('express').Router();
const Main = require('../../components/Main');
// const Rate = require('../../components/Rate');

router.get('/', (req, res) => {
  res.renderComponent(Main, { title: 'ZOO' });
});


module.exports = router;
