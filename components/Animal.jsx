const React = require('react');
// const slider = require('./Slider')

module.exports = function Animal({animal}) {
  return (
    <div className="col s4 ">
      <div className="animalCard">
        <div>{animal.name}</div>
        <div>
          {/* <Slider/> */}
        </div>
        <a href="">О зверушке!</a>
      </div>
    </div>
  );
};
