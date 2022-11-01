const router = require('express').Router();
const Enter = require('../views/Enter');
const Profile = require('../views/Profile');
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', (req, res) => {
  renderTemplate(Enter, { title: 'Enter' }, res);
});

router.post('/', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  const { password, id } = user.get();
  console.log(user);
  if (password === req.body.password) {
    res.redirect('/');
  } else {
    renderTemplate(Enter, {}, res);
  }
  res.end();
});

module.exports = router;
