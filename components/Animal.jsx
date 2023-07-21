const React = require('react');
// const img = require('../db/models')

// const slider = require('./Slider')

module.exports = function Animal({animal}) {

  return (
    <div className="col s4 ">
      <div className="animalCard">
        <div>{animal.name}</div>
        <div className="animal-image">
          {/* <img className="imgGun" src={images.url} /> */}
        </div>
        <a href={`/animals/${animal.id}`}>О зверушке!</a>
      </div>
    </div>
  );
};
