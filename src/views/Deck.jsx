const React = require('react');
const Layout = require('./Layout');

module.exports = function Deck({ title, decks }) {
  return (
    <Layout title={title}>
      <a href='/cinema'>{decks[0].name}</a>
      <br />
      <a href='books'>{decks[1].name}</a>
      <br />
      <a href='/js'>JS</a>
      <br />
      <a href='/smertVragam'>Слава Украине!</a>
    </Layout>
  );
};
