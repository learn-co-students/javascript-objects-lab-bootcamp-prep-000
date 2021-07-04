var recipes = {}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes = Object.assign({}, recipes, { [ingredient]: amount })
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount
  return recipes
}

function deleteFromObjectByKey(recipes, ingredient) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[ingredient]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient]
  return recipes
}