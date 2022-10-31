require('@babel/register');
const express = require('express');

const registration = require('./routers/registration.router');
const question = require('./routers/questions.router');
const enterUser = require('./routers/enterUser.router');

const topUserRouter = require('./routers/topUserRender.router');

const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/registration_form', registration);

app.use('/', enterUser);

app.use('/', topUserRouter);
app.use('/', question);

// app.get('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => { console.log('Server is up'); });
