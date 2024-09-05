const express = require('express');
const router = express.Router();
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require('../controllers/petControllers');

// GET /pets
router.get('/', getAllPets);

// POST /pets
router.post('/', createPet);

// GET /pets/:petId
router.get('/:petId', getPetById);

// PUT /pets/:petId
router.put('/:petId', updatePet);

// DELETE /pets/:petId
router.delete('/:petId', deletePet);

module.exports = router;