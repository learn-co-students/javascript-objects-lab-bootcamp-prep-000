var recipes = {
  protein: 'chicken',
  spice: 'pepper',
  fruit: 'lemon',
  veggie: 'carrot'
};

function updateObjectWithKeyAndValue(object, key, value) {
  // recipes[protein] = steak;
  // return recipes;
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes);
  return delete newRecipes.protein;
  // return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // delete recipes.protein;
  // return recipes;
  
  delete object[key];
  return object;
}