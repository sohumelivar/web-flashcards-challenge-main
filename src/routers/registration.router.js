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
//     router.app.locals.email = req.body.email;
//     router.app.body.locals.password = req.body.password;
//     router.app.locals.username = req.body.username;

//     const findEmail = await User.findAll({ where: { email: router.locals.email } });
//     if (!findEmail.length) {
//       const creating = await User.create({ email: req.body.email, username: req.body.username, password: req.body.password });
//       res.json(creating);
//     } else {
//       res.sendStatus(403);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
