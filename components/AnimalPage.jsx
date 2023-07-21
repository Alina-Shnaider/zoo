const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalPage({ animal }) {
  return (
    <Layout>
      <div>
        <h1>{animal.name}</h1>
        {animal.Images.map((image) => (
          <img src={image.url} />
        ))}
        <h3>{animal.description}</h3>
      </div>
    </Layout>
  );
};