const React = require('react');
const Layout = require('./Layout');

function Enter() {
  return (
    <Layout>
      <form method="post" action="/enter">
        <div>
          <input type="text" id="inputEmail" name="email" placeholder="e-mail" />
          <input type="text" id="inputPassword" name="password" placeholder="password" />
          <button type="submit" className="btn btn-primary">Enter</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Enter;
