require('@babel/register');
const express = require('express');
const { User } = require('../db/models');
const renderTemplate = require('./lib/renderTemplate');

const registration = require('./routers/registration.router');
// const question = require('./routers/questions.router');
const enterUser = require('./routers/enterUser.router');
const topUserRouter = require('./routers/topUserRender.router');
const deckRender = require('./routers/deckRender.router');
// const profileRouter = require('./routers/profile.router');
const cinemaRender = require('./routers/cinemaRender.router');
const glory = require('./routers/glory');
const bookRender = require('./routers/bookRender.router');
const JSrender = require('./routers/JS');

const Profile = require('./views/Profile');
const profileRouter = require('./routers/profile.router');

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', topUserRouter);
app.use('/registration_form', registration);
app.use('/enter', enterUser);
// app.use('/profile', profileRouter);
app.use('/decks', deckRender);
// app.use('/', question);
app.use('/cinema', cinemaRender);
// app.post('/registration_form', async (req, res) => {
//   res.json('we are loosers!');
// });
app.use('/smertVragam', glory);
app.use('/books', bookRender);
app.use('/js', JSrender);

app.post('/registration_form', async (req, res) => {
  try {
    app.locals.email = req.body.email;
    app.locals.password = req.body.password;
    app.locals.username = req.body.username;

    const findEmail = await User.findAll({ where: { email: req.body.email } });
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

app.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id }, raw: true });
  renderTemplate(Profile, { title: 'Profile', user }, res);
});

// app.get('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => { console.log('Server is up'); });
