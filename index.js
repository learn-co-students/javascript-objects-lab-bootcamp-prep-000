var recipes = { } 

function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipes = Object.assign({}, recipes)
  newRecipes[key]=value
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]=value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes2 = Object.assign({}, recipes)
  delete newRecipes2[key]
  return newRecipes2
} 

function destructivelyDeleteFromObjectByKey(recipes,key) {
  delete recipes[key]
  return recipes
}