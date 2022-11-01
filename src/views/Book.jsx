const React = require('react');
const Layout = require('./Layout');

module.exports = function Book({ title, card }) {
  return (
    <Layout title={title}>
      <h3>{card[1].question}</h3>
      <input type="text" name="answer" placeholder="Enter the answer" />
      <button type="submit" className="back">Back to Main Page</button>
      <button id="send" type="submit">Send</button>
      <button id="next" type="submit">Next question</button>
    </Layout>
  );
};
