var recipes = {name:'myRecipe'};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, recipes, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes
}

function deleteFromObjectByKey (recipes, key) {
  var copyOfRecipes = {};
  Object.assign(copyOfRecipes, recipes);
  delete copyOfRecipes[key]
  return copyOfRecipes
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key]
  return recipes
}
