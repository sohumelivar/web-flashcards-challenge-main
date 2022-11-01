const React = require('react');
const Layout = require('./Layout');

module.exports = function Glory({ title }) {
  return (
    <Layout title={title}>
      <div><span><iframe width="560" height="315" src="https://www.youtube.com/embed/nybtOIxlku8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></span></div>
    </Layout>
  );
};
