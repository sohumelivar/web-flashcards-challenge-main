const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ title, topPlayers }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h1>Добро пожаловать в увлекательную игру!</h1>
      </div>
      <div>
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="/registration_form">Registration</a>
          <a className="nav-link" href="enter">Login</a>
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">FlashCards</a>
        </nav>
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
