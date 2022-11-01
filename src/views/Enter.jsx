const React = require('react');
const Layout = require('./Layout');

function Enter() {
  return (
    <Layout>
      <div className="container">
        <h3>Sign in</h3>
        <form method="post" action="/enter">
          <div className="mb-3">
            <input placeholder='Your name' className="form-control" type="text" id="inputEmail" name="email" required />
          </div>
          <div className="mb-3">
            <input placeholder='Your password' className="form-control" type="text" id="inputPassword" name="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Enter</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Enter;
