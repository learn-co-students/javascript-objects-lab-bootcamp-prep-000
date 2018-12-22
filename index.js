var recipes = {};

function updateObjectWithKeyAndValue(recipes, ingredient, quantity) {
  var new_recipes = Object.assign({}, recipes);
  new_recipes[ingredient] = quantity;
  return new_recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, quantity) {
  recipes[ingredient] = quantity;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient) {
  var new_recipes = Object.assign({}, recipes);
  delete new_recipes[ingredient];
  return new_recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient];
  return recipes;
}