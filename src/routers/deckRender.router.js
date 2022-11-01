const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const deckComponent = require('../views/Deck');
const { Deck } = require('../../db/models');

router.get('/decks', async (req, res) => {
  try {
    const allDecks = await Deck.findAll();
    const decks = allDecks.map((el) => el.dataValues);
    renderTemplate(deckComponent, { title: 'Decks', decks }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
