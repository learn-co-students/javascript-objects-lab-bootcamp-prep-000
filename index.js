const recipes = {milk: '1 cup', flour: '4 cups'}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newerRecipes = Object.assign({}, object)
  delete newerRecipes[key]
  return newerRecipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}