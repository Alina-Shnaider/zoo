const router = require('express').Router();
const { Tarif } = require('../../db/models');

router.put('/bdRate/:idRate', async (req, res) => {
  const { weekend, dayOff } = req.body;
  const { idRate } = req.params;
  const rate = await Tarif.update({ weekend, dayOff }, { where: { id: idRate } });
});
module.exports = router;
