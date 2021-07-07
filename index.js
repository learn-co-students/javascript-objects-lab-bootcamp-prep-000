var recipes = {};

function updateObjectWithKeyAndValue(recipes, eggs, one) {
  
  return Object.assign({}, recipes, {[eggs]: one});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, flour, two) {
  recipes[flour] = two;
  
  return recipes
}
  
function deleteFromObjectByKey(recipes, flour) {
  var newRecipe = Object.assign({}, recipes);
  delete newRecipe[flour];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}