const { Deck } = require('./db/models');

const addTheme1 = async () => {
  try {
    const result = await Deck.create({ name: 'cinema' });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addTheme1();

const addTheme2 = async () => {
  try {
    const result = await Deck.create({ name: 'geography' });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addTheme2();

const addTheme3 = async () => {
  try {
    const result = await Deck.create({ name: 'books' });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addTheme3();

// npx node addTheme.js
