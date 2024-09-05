const Pet = require("../models/petModel");

// GET /pets
const getAllPets = (req, res) => {
  const pets = Pet.getAll();
  res.json(pets);
};

// POST /pets
const createPet = (req, res) => {
  const newPet = Pet.addOne({ ...req.body }); // Spread the req.body object

  if (newPet) {
    res.json(newPet);
  } else {
    // Handle error (e.g., failed to create pet)
    res.status(500).json({ message: "Failed to create pet" });
  }
};

// GET /pets/:petId
const getPetById = (req, res) => {
  const petId = req.params.petId;
  const pet = Pet.findById(petId);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ message: "Pet not found" });
  }
};

// PUT /pets/:petId
const updatePet = (req, res) => {
  const petId = req.params.petId;
  const updatedPet = Pet.updateOneById(petId, { ...req.body }); // Spread the req.body object

  if (updatedPet) {
    res.json(updatedPet);
  } else {
    // Handle update failure (e.g., pet not found)
    res.status(404).json({ message: "Pet not found" });
  }
};

// DELETE /pets/:petId
const deletePet = (req, res) => {
  const petId = req.params.petId;
  const isDeleted = Pet.deleteOneById(petId);

  if (isDeleted) {
    res.json({ message: "Pet deleted successfully" });
  } else {
    // Handle deletion failure (e.g., pet not found)
    res.status(404).json({ message: "Pet not found" });
  }
};

module.exports = {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
};
