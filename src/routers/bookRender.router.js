const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Card } = require('../../db/models');
const BookComponent = require('../views/Book');

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ where: { DeckId: 2 } });
  const card = cards.map((el) => el.dataValues);
  console.log(card);
  renderTemplate(BookComponent, { title: 'Books deck', card }, res);
});

module.exports = router;
