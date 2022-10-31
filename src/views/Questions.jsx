const React = require('react');
const Layout = require('./Layout');

module.exports = function Questions({ title, deck, question, answer }) {
  return (
    <Layout title={title}>
      <form className="formQ" method="post" action="/questions">
        <div>
          <h1 className="deck">{deck}</h1>
          <h2 className="question">{question}</h2>
          <h3 className="answer">{answer}</h3>
          <button type="submit" className="btn btn-primary next">Next question</button>
          <button type="submit" className="btn btn-primary enter">Enter</button>
        </div>
      </form>
    </Layout>
  );
};
