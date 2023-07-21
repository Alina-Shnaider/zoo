const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalsList = require('../../components/AnimalsList');
const oneAnimal = require('../../components/Animal');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  console.log(animals);
  res.renderComponent(AnimalsList, { title: 'Animals', animals });
});

module.exports = router;
