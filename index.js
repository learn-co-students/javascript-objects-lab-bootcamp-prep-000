var recipes = {eggs: "3", flour: "1 cup", butter: "1 tbsp"}


function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes
}


var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey(recipes, key) {
  delete newRecipes.key;
  return newRecipes
}

