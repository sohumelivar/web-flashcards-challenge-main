const React = require('react');
const Layout = require('./Layout');

module.exports = function Enter({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h3>Sign in</h3>
        <form method="post" action="/enter">
          <div className="mb-3">
            <input placeholder="Your name" className="form-control" type="text" id="inputEmail" name="email" />
          </div>
          <div className="mb-3">
            <input placeholder="Your password" className="form-control" type="text" id="inputPassword" name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Enter</button>
        </form>
      </div>
    </Layout>
  );
};
