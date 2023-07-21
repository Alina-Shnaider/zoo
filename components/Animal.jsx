const React = require('react');

// const img = require('../db/models')



module.exports = function Animal({animal}) {

  const index = Math.floor(Math.random() * animal.Images.length)


  return (
    <div className="col s4 ">
      <div className="animalCard">
        <div>{animal.name}</div>

        <div className="animal-image">
          <img  src={animal.Images[index].url} />

          <div></div>
          <a href={`/animals/${animal.id}`}>О зверушке!</a>
        </div>
      </div>
    </div>
    </div>
  );
};
