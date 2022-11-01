const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title, topPlayers }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Добро пожаловать в увлекательную игру!</h1>
        <a className="registationBar" href="/registration_form">Registation</a>
        <a className="loginBar" href="/enter">Login</a>
      </div>
      <div>
        Лучшие игроки:
        <p />
        {topPlayers.map((el) => (
          <p>
            {el.username}
            {' '}
            -
            {' '}
            {el.best_score}
          </p>
        ))}
      </div>
    </Layout>
  );
};
