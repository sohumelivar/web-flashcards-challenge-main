const router = require('express').Router();
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');

router.get('/', async (req, res) => {
  try {
    const topPlayers = await User.findAll();
    renderTemplate(MainPage, { topPlayers }, res);
  } catch (error) {
    console.log('_______Error_______ ', error);
  }
});

module.exports = router;
