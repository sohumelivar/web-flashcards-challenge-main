const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Card } = require('../../db/models');
const CinemaComponent = require('../views/Cinema');

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ where: { DeckId: 1 } });
  const card = cards.map((el) => el.dataValues);
  console.log(card);
  renderTemplate(CinemaComponent, { title: 'Cinema deck', card }, res);
});

module.exports = router;
