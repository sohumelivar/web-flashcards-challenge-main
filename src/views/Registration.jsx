const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({}) {
  return (
    <Layout>
      <div className="container">
        <form method="POST" action="/registration_form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
            <input name="username" type="text" className="form-control" id="exampleInputPassword" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </Layout>
  );
};
