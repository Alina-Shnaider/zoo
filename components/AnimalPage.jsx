const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalPage({ animal, images }) {
  return (
    <Layout>
      <div>
        <h1>{animal.name}</h1>
        <img src={images[0].url} />
        <img src={images[1].url} />
        <img src={images[2].url} />
        <h3>{animal.description}</h3>
      </div>
    </Layout>
  );
};