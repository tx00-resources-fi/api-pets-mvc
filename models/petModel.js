/* // The data model for pet is as follows
{
    "name": "Buddy",
    "species": "Dog",
    "age": 1,
    "color": "Brown",
    "weight": 2
  }
 */

let petArray = [];

let nextId = 1;

function getAll() {
  return petArray;
}

function addOne(petData) {
  // Check if any parameter is empty or undefined
  const { name, species, age, color, weight } = petData;
  if (!name || !species || !age || !color || !weight) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...petData,
  };

  petArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = petArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const pet = findById(id);
  if (pet) {
    Object.assign(pet, updatedData); // Update properties using Object.assign
    return pet;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = petArray.length;
    petArray = petArray.filter((item) => item.id !== Number(id));
    return petArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add pet
  let result = addOne({
    name: "Buddy",
    species: "Dog",
    age: 3,
    color: "Brown",
    weight: 20,
  });
  console.log("result", result);
  console.assert(typeof result === "object", "Result should be an object");

  // Add another pet
  result = addOne({
    name: "Mittens",
    species: "Cat",
    age: 2,
    color: "Black",
    weight: 10,
  });
  console.log(result);
  console.assert(typeof result === "object", "Result should be an object");

  // Get all pets
  const allPets = getAll();
  console.log("getAll called:", allPets);
  console.assert(Array.isArray(allPets), "getAll should return an array");
  console.assert(
    allPets.length === 2,
    "getAll should return an array of length 2"
  );

  // Find pet by ID
  const pet = findById(1);
  console.log("findById called:", pet);
  console.assert(typeof pet === "object", "findById should return an object");

  // Update pet by ID
  const updatedPet = updateOneById(1, { age: 4, weight: 22 });
  console.log("updateOneById called:", updatedPet);
  console.assert(
    typeof updatedPet === "object",
    "updateOneById should return an object"
  );

  // Verify update
  const updatedPetCheck = findById(1);
  console.log("findById called after item updated:", updatedPetCheck);
  console.assert(
    updatedPetCheck.age === 4 && updatedPetCheck.weight === 22,
    "Pet should be updated"
  );

  // Delete pet by ID
  const deletedPet = deleteOneById(1);
  console.log("deleteOneById called:", deletedPet);
  console.assert(deletedPet === true, "deleteOneById should return true");

  // Verify deletion
  const deletedPetCheck = findById(1);
  console.log("findById called after item deleted:", deletedPetCheck);
  console.assert(deletedPetCheck === false, "Pet should be deleted");
}

const Pet = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Pet;
