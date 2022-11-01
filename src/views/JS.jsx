const React = require('react');
const Layout = require('./Layout');

module.exports = function Cinema({ title, card }) {
  return (
    <Layout title={title}>
      <h3>{card[0].question}</h3>
      <input type="text" name="answer" placeholder="Enter the answer"></input>
      <button id="back" className="back">Back to Main Page</button>
      <button id="send">Send</button>
      <button id="next">Next question</button>
    </Layout>
  );
};