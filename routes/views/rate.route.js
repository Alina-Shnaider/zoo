const router = require('express').Router();
const Rate = require('../../components/Rate');

router.get('/', (req, res) => {
  res.renderComponent(Rate, { title: 'rate' });
});

module.exports = router;
