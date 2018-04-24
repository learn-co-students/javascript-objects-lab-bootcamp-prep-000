var recipes = new Object({key: "value"});

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value) {
  recipes [key] = value
  return recipes
}

function deleteFromObjectByKey(recipes,key) {
  recipes = { key: "value" }
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes,key) {
  delete recipes[key]
  return recipes
}

