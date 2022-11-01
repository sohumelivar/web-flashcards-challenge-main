const router = require('express').Router();
const RegistrationComponent = require('../views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  // console.log(req.query);
  renderTemplate(RegistrationComponent, req.query, res);
});

module.exports = router;
