var recipes = {};
//var recipe = { eggs: "3" };
//var recipe = new Object( { eggs: "3" } );
function updateObjectWithKeyAndValue(recipe, ingredient, quantity) {
var updatedRecipe = Object.assign({}, recipe)
updatedRecipe = Object.assign({}, updatedRecipe, { [ingredient]: quantity });
  return updatedRecipe
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, ingredient, quantity) {
recipe[ingredient] = quantity;
  return recipe
}
function deleteFromObjectByKey(recipe, ingredient) {
var updatedRecipe = Object.assign({}, recipe)
delete updatedRecipe.ingredient
  return updatedRecipe
}
function destructivelyDeleteFromObjectByKey(recipe, ingredient){
delete recipe.ingredient
return recipe
}