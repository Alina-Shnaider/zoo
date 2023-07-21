const router = require('express').Router();
const { Tarif } = require('../../db/models');

// router.put('/bdRate/:idRate', async (req, res) => {
//   const { weekend, dayOff } = req.body;
//   const { idRate } = req.params;
//   const rate = await Tarif.update({ weekend, dayOff }, { where: { id: idRate } });
// });

router.put('/bdRate/:idRate', async (req, res) => {
  try {
    const { idRate } = req.params;
    const { weekend, dayOff } = req.body;

    await Tarif.update({ weekend, dayOff }, { where: { id: idRate } });
    res.status(200).json({ message: 'ok' });
  } catch (error) {
    console.log('ошибка', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
