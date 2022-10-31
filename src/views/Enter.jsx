const React = require('react');
const Layout = require('./Layout');

function Enter() {
  return (
    <Layout>
      <form method="post" action="/enter">
        <div>
          <input type="text" id="inputEmail" name="email" />
          <input type="text" id="inputPassword" name="password" />
          <button type="submit" className="btn btn-primary">Enter</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Enter;
