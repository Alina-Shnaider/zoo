const router = require('express').Router();

router.put('/bdRate/:idRate', async (req, res) => {
  const { weekend, dayOff } = res.body;
  const { idRate } = req.params;
  const rate = await Rate.update({ weekend, dayOff }, { where: { id: idRate } });
});
module.exports = router;
