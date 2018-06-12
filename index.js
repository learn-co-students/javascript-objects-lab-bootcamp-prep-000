var recipes = {rice: '1 cup', water: '2 cups', salt: 'to taste'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, recipes)
  return delete newRecipes.key
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}