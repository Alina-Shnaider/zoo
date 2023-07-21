const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  if (name && password) {
    const user = await User.findOne({ where: { name, password } });
    if (user) {
      req.session.userId = user.id;
      res.json({ message: 'ok' });
    } else {
      res.json({ message: 'ne ok ' });
    }
  }
});

module.exports = router;
