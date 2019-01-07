const recipes = {};
function updateObjectWithKeyAndValue (recipes, key, value){
 var newRecipe = Object.assign ({}, recipes);
 newRecipe[key] = value;
 return newRecipe;
}
function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value){
  //return Object.assign({}, recipes, {[key] : value});
  recipes[key] = value;
  return recipes;
}
function deleteFromObjectByKey (object, key){
  var newRecipe = Object.assign({}, object);
  delete newRecipe[key];
  return newRecipe;
}
function destructivelyDeleteFromObjectByKey (object, key){
  delete object[key];
  return recipes;
}