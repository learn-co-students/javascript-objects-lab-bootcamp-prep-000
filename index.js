var recipes = { pork: "5 lbs", oranges: "2", onion: '1', jalapeno: '1' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign({}, recipes, {[ingredient]: amount});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes;
}
function deleteFromObjectByKey(recipes, ingredient) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.ingredient;
  return newRecipes;
}
function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient];
  return recipes;
}