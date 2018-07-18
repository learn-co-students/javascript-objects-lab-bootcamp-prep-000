var recipes = {key: "value"};
function destructivelyUpdateObjectWithKeyAndValue (recipe, key, value) {
  recipe[key] = value;
  return recipe;
}
function updateObjectWithKeyAndValue (recipe, key, value) {
  var newRecipe = Object.assign({}, recipe, {[key]: value});
  return newRecipe;
}
function destructivelyDeleteFromObjectByKey(recipe, key) {
  delete recipe[key];
  return recipe;
}
function deleteFromObjectByKey(recipe, key) {
  var newRecipe2 = Object.assign({}, recipe);
  delete newRecipe2[key];
  return newRecipe2;
}