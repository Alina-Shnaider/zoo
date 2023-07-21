const router = require('express').Router();
const { Animal } = require('../../db/models');
const AnimalsList = require('../../components/AnimalsList');
const { Image } = require('../../db/models');
const AnimalPage = require('../../components/AnimalPage')
// const oneAnimal = require('../../components/Animal');

router.get('/', async (req, res) => {
  const animals = await Animal.findAll();
  res.renderComponent(AnimalsList, { title: 'Animals', animals });
});

router.get('/:idAnimal', async (req, res) => {
  const { idAnimal } = req.params;
  const images = await Image.findAll({ where: { animalId: idAnimal } });
  console.log(images);
  const animal = await Animal.findOne({ where: { id: idAnimal } });
  res.renderComponent(AnimalPage, { animal, images });
});

module.exports = router;
