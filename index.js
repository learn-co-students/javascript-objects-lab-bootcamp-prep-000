var recipes = {

};

function destructivelyUpdateObjectWithKeyAndValue(recipeName, ingredient, quantity) {
  recipeName[ingredient] = quantity;
  return recipeName;
}

function destructivelyDeleteFromObjectByKey(recipeName, ingredient){
  delete recipeName[ingredient];
  return recipeName;
}

function updateObjectWithKeyAndValue(recipeName, ingredient, quantity) {
  return Object.assign(recipeName, { [ingredient]: quantity })
}

function deleteFromObjectByKey(recipeName, ingredient){
  var newRecipes = Object.assign({}, recipeName);
  delete newRecipes[ingredient];
  return newRecipes;
}
