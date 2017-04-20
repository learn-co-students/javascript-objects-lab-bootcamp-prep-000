var recipes = {ingredients:"steps"};

var updateObjectWithKeyAndValue = function(recipes, ingredients, steps) {
   return Object.assign({}, recipes, { [ingredients]: steps });
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredients, steps) {
  recipes[ingredients] = steps;
  return recipes;
}
 
function deleteFromObjectByKey(recipes, ingredients) {
  var newRecipe = Object.assign({}, recipes);
  delete newRecipe.ingredients;
  return newRecipe;
}
 
function destructivelyDeleteFromObjectByKey(recipes, ingredients) {
  delete recipes.ingredients;
  return recipes;
}