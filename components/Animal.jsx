const React = require('react');

// const img = require('../db/models')

module.exports = function Animal({ animal }) {
  const index = Math.floor(Math.random() * animal.Images.length);
  console.log(animal, '===================================================================');

  return (
    <div className="col_s4 oneAnimal" data-id={animal.id}>
      <div className="animalCard">
        <div className='ani'>{animal.name}</div>

        <div className="animal-image">
          <img src={animal.Images[index].url} />


          <div>
          <button className='updateAnimal'>Изменить</button>
          <button className='deleteAnimal'>Удалить</button>
          </div>
          <a href={`/animals/${animal.id}`}>О зверушке!</a>

        </div>
      </div>
    </div>
  );
};
