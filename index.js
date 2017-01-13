var recipes = {
  pancakes: ['2 eggs', '2 cups flour', '1 cup milk'],
  dumplings: ['4 eggs', '5 cups flour', '1 cup milk', '2 pounds liver'],
  blt: ['2 bacon', '1 tomato', '1 lettuce']
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[key]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}
