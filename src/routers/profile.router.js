const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const { User } = require('../../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const user = await User.findOne({ where: { id }, raw: true });
  console.log(user);
  renderTemplate(Profile, { title: 'Profile', user }, res);
});

module.exports = router;
