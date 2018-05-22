var recipes = {crepes : 'eggs'}
function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipe = Object.assign({}, recipes, {[key]: value})
  return newRecipe
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]=value
  return recipes
}
function deleteFromObjectByKey(recipes, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[key]
  return newRecipe
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}