const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const GloryComponent = require('../views/Glory');

router.get('/', (req, res) => {
  renderTemplate(GloryComponent, { title: 'SlavaUkraine' }, res);
});

module.exports = router;
