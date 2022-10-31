require('@babel/register');
const express = require('express');


const enterUser = require('./routers/enterUser.router');

const topUserRouter = require('./routers/topUserRender.router');


const app = express();

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', enterUser);

app.get('*', (req, res) => res.redirect('/'));

app.use('/', topUserRouter);


app.listen(PORT, () => { console.log('Server is up'); });
