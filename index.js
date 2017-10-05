var recipes = {};

function updateObjectWithKeyAndValue(recipes, ingredient, value) {
  //recipes[ingredient] = value;
  return Object.assign({}, recipes, {[ingredient]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, value) {
  recipes[ingredient] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient) {
    var newRecipes = Object.assign({}, recipes);
    //Object.assign({}, recipes, {[ingredient]: value});
    delete newRecipes[ingredient];
    return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  //return recipes;
  delete recipes[ingredient];
  return recipes;
}
