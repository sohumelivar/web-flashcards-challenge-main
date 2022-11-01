require('@babel/register');
const express = require('express');
const { User } = require('../db/models');

const registration = require('./routers/registration.router');
// const question = require('./routers/questions.router');
const enterUser = require('./routers/enterUser.router');
const topUserRouter = require('./routers/topUserRender.router');
const deckRender = require('./routers/deckRender.router');
const profileRouter = require('./routers/profile.router')

const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', topUserRouter);
app.use('/registration_form', registration);
app.use('/enter', enterUser);
app.use('/profile', profileRouter);
app.use('/decks', deckRender);
// app.use('/', question);

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
  } catch (error) {
    console.log(error);
  }
});

// app.get('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => { console.log('Server is up'); });
