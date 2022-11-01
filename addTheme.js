const { Deck } = require('./db/models');
const { Card } = require('./db/models');

// const addCard1 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 1, question: 'Кто режиссер фильма "Криминальное чтиво" ?', answer: 'квентин тарантино' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard1();

// const addCard2 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 1, question: 'Как назывался космический корабль Хана Соло ?', answer: 'сокол тысячелетия' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard2();

// const addCard3 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 2, question: 'Как ззали мальчика который выжил в книге Дж. Роулинг ?', answer: 'гарри поттер' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard3();

const addCard7 = async () => {
  try {
    const result = await Card.create({ DeckId: 2, question: 'Как звали мальчика который выжил в книге Дж. Роулинг ?', answer: 'гарри поттер' });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
addCard7();


// const addCard5 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 3, question: 'Что будет в консоли? console.log(\'\' || undefined || 0 || null)\'', answer: 'null' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard5();

// const addCard6 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 3, question: 'Верно ли сравнение "ёжик" > "яблоко"?', answer: 'яблоко' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard6();

// const addCard4 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 3, question: 'Что получится, если сложить true + false?', answer: '1' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard4();
// const addCard4 = async () => {
//   try {
//     const result = await Card.create({ DeckId: 2, question: '', answer: '' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addCard4();

// const addTheme1 = async () => {
//   try {
//     const result = await Deck.create({ name: 'cinema' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addTheme1();

// const addTheme2 = async () => {
//   try {
//     const result = await Deck.create({ name: 'geography' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addTheme2();

// const addTheme3 = async () => {
//   try {
//     const result = await Deck.create({ name: 'books' });
//     return result;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addTheme3();

// npx node addTheme.js
