const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ title, user }) {
  return (
    <Layout title={title}>
      <div>
        <h3>
          Welcome,
          {' '}
          {user.username}
        </h3>
        <h4>
          Your best score:
          {' '}
          {user.best_score}
        </h4>
        <h4>
          Your last score:
          {' '}
          {user.last_score}
        </h4>
        <h4>
          You played
          {' '}
          {user.games}
          {' '}
          games
        </h4>
        <button type="button" className="btn btn-primary" id="playBtn">Play Game</button>
      </div>
    </Layout>
  );
};
