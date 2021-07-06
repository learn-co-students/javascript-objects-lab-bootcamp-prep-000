var recipes = {eggs :3}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign({},object,{[key]:value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes = Object.assign(object,{[key]:value})
  return recipes  
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, object)
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return recipes
}