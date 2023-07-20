const Animal = require('./Animal');
const Layout = require('./Layout');
const React = require('react');

module.exports = function AnimalsList({ title, animals, user }) {
  return (
    <Layout>
      <div className="row animalsList">
        {animals.map((animal) => (
          <Animal animal={animal} />
        ))}
      </div>
    </Layout>
  );
};
