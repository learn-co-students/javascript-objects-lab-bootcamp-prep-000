var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(recipes, name, ingredients){
  recipes[name] = ingredients;
  return recipes;
}
function destructivelyDeleteFromObjectByKey(recipes, name){
  delete recipes[name];
  return recipes;
}
function updateObjectWithKeyAndValue(recipes, name, ingredients){
  var newRecipe = Object.assign({}, recipes);
  newRecipe[name] = ingredients;
  return newRecipe;
}
function deleteFromObjectByKey(recipes, name){
  var newRecipe = Object.assign({}, recipes);
  delete newRecipe[name];
  return newRecipe;
}
