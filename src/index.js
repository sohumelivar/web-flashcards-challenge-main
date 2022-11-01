require('@babel/register');
const express = require('express');
const { User } = require('../db/models');

const registration = require('./routers/registration.router');

const enterUser = require('./routers/enterUser.router');

const topUserRouter = require('./routers/topUserRender.router');

const deckRender = require('./routers/deckRender.router');

const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/registration_form', registration);
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', enterUser);

app.use('/', topUserRouter);
app.use('/decks', deckRender);
/// /////////////////////////////////////////////////
app.post('/registration_form', async (req, res) => {
  try {
    app.locals.email = req.body.email;
    app.locals.password = req.body.password;
    app.locals.username = req.body.username;

    const findEmail = await User.findAll({ where: { email: app.locals.email } });
    if (!findEmail.length) {
      const creating = await User.create({ email: req.body.email, username: req.body.username, password: req.body.password });
      res.json(creating);
    } else {
      res.sendStatus(403);
    }

    // if (findEmail.length === 0) {
    //   //   // eslint-disable-next-line max-len
    // res.redirect('/');
    // res.json({ done: 'yes' });
    // } else if (findEmail.length > 0) {
    // res.redirect('/registration_form?error=test');
    // res.json({ done: 'yes' });
    // }
  } catch (error) {
    console.log(error);
  }
});
/// //////////////////////////////////////////////
// app.get('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => { console.log('Server is up'); });
