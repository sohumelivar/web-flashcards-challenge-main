const router = require('express').Router();
const Enter = require('../views/Enter');
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

router.get('/enter', (req, res) => {
  renderTemplate(Enter, {}, res);
});

router.post('/enter', async (req, res) => {
  const [user] = await User.findAll({ where: { email: req.body.email } });
  const { password } = user.get();
  if (password === req.body.password) {
    res.redirect('/profile');
  } else {
    renderTemplate(Enter, {}, res);
  }
});

module.exports = router;
