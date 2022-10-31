const router = require('express').Router();
const RegistrationComponent = require('../views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  console.log(req.query);
  renderTemplate(RegistrationComponent, req.query, res);
});

router.post('/', async (req, res) => {
  try {
    const findEmail = await User.findAll({ where: { email: req.body.email } });
    if (findEmail.length === 0) {
      const user = await User.create({ email: req.body.email, username: req.body.username, password: req.body.password });
      res.redirect('/profile');
    } else if (findEmail.length > 0) {
      res.redirect('/registration_form?error=test');
    }
    res.end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
