var recipes = {prop1: '1'}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return Object.assign({}, recipes, {prop2:2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes.prop2 = 2
  return recipes
}

function deleteFromObjectByKey(recipes, prop) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes.prop
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop
  return recipes
}
