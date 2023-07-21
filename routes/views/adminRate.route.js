const router = require('express').Router();
const AdminRate = require('../../components/AdminRate');
const { Tarif, People } = require('../../db/models');

router.get('/', async (req, res) => {
  const rate = await Tarif.findAll({ include: { model: People } });
  res.renderComponent(AdminRate, { title: 'Тарифы', rate });
});

module.exports = router;
