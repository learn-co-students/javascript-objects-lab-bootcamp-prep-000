var recipes = {ingredient: 'amount'}

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
 return Object.assign({}, recipes, {[ingredient]: amount});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient) {
  var newObj = Object.assign({}, recipes);
  delete newObj[ingredient]
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient];
  return recipes;
}