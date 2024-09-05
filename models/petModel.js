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
  let result = addOne({
    name: "Buddy",
    species: "Dog",
    age: 3,
    color: "Brown",
    weight: 20,
  });
  console.assert(result.length === 1, "Test 1 Failed: Should add one pet");
  console.log(result);
  // Test 2: Add another valid pet
  result = addOne({
    name: "Mittens",
    species: "Cat",
    age: 2,
    color: "Black",
    weight: 10,
  });
  console.assert(result.length === 2, "Test 2 Failed: Should add another pet");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOne called:", updateOneById(1, { age: 4, weight: 22 }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const Pet = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Pet;
