const router = require('express').Router();
const { User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/MainPage');

router.get('/', async (req, res) => {
  try {
    const AllPlayers = await User.findAll();
    const topPlayers = AllPlayers.map((user) => user.dataValues);
    // console.log(topPlayers);
    renderTemplate(MainPage, { title: 'Main', topPlayers }, res);
  } catch (error) {
    console.log('!!!!_______Error_______!!!! ', error);
  }
});

module.exports = router;
