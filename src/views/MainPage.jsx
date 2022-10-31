const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title, topPlayers }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Добро пожаловать в увлекательную игру!</h1>
        <a className="registationBar" href="/">Registation</a>
        <a className="loginBar" href="/">Login</a>
      </div>
      <div>
        <table className="table table-striped">
          {topPlayers}
        </table>
      </div>
    </Layout>
  );
};
