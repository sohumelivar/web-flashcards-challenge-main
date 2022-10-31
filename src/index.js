require('@babel/register');
require('dotenv').config();
const express = require('express');

const registration = require('./routers/registration.router');

const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/registration_form', registration);

app.listen(PORT, () => { console.log('Server is up'); });
