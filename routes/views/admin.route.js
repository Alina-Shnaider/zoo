const router = require('express').Router();
const Admin = require('../../components/Admin');
// const Rate = require('../../components/Rate');

router.get('/', (req, res) => {
  res.renderComponent(Admin, { title: 'Admin' });
});

module.exports = router;
