//define a recipe object
const recipes = {};

//define a function which updates the key-value pairs of the recipes object
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign( {}, recipes, { [key] : value } );
};

//define a function which destructively updates the recipes object
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
};

//define a function which non-destructively deletes a key-value pair from the recipes object
function deleteFromObjectByKey(recipes, key){
  var newRecipes = Object.assign( {}, recipes);
  delete newRecipes[key];
  return newRecipes;
};

//define a function which destructively deletes a key-value pair from the recipes object
function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
};
