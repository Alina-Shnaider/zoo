const { User } = require('../db/models');

async function auth(req, res, next) {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.locals.userName = user.name;
    res.locals.userId = user.id;
  }
  next();
}

module.exports = auth;
