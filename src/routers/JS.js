const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Card } = require('../../db/models');
const JSComponent = require('../views/JS');

router.get('/', async (req, res) => {
  const cards = await Card.findAll({ where: { DeckId: 3 } });
  const card = cards.map((el) => el.dataValues);
  console.log(card);
  renderTemplate(JSComponent, { title: 'Books deck', card }, res);
});

module.exports = router;
