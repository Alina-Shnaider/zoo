const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalsList = require('../../components/AnimalsList');
const { Image } = require('../../db/models');
const AnimalPage = require('../../components/AnimalPage');
// const oneAnimal = require('../../components/Animal');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll({ include: Image });
  console.log(animals);
  res.renderComponent(AnimalsList, { title: 'Animals', animals });
});

router.get('/:idAnimal', async (req, res) => {
  const { idAnimal } = req.params;
  const animal = await Animal.findOne({ where: { id: idAnimal }, include: Image });
  res.renderComponent(AnimalPage, { animal });
});

module.exports = router;
