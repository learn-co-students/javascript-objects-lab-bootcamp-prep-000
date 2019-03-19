var recipes = {
  someKey: 'someValue'
}

function updateObjectWithKeyAndValue(recipes, someKey, someValue) {
  return Object.assign({}, recipes, {[someKey]: someValue})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, someKey, someValue) {
  recipes[someKey] = someValue
  return recipes
}

function deleteFromObjectByKey(recipes, someKey) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[someKey]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, someKey) {
  delete recipes[someKey]
  return recipes
}

// function destructivelyDeleteFromObjectByKey () {
//
// }
