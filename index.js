var recipes = new Object();

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipes = Object.assign({}, recipes, {[key]:value});
  return newRecipes;
}

function deleteFromObjectByKey(recipes, key){
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes[key];
  return newRecipes;
}
