const router = require('express').Router();
const RegistrationComponent = require('../views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  console.log(req.query);
  renderTemplate(RegistrationComponent, req.query, res);
});

// router.post('/', async (req, res) => {
//   try {
//     console.log(req.locals.password);
//     const findEmail = await User.findAll({ where: { email: req.body.email } });
//     if (findEmail.length === 0) {
//     //   //   // eslint-disable-next-line max-len
//       const user = await User.create({ email: req.body.email, username: req.body.username, password: req.body.password });
//       res.redirect('/');
//     res.json({ done: 'yes' });
//     // } else if (findEmail.length > 0) {
//     // res.redirect('/registration_form?error=test');
//     // res.json({ done: 'yes' });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
