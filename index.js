var recipes = new Object()
var recipes_copy = new Object()

function updateObjectWithKeyAndValue(recipes, key, value) {
    return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  recipes_copy = Object.assign({}, recipes)
  delete recipes_copy[key]
  return recipes_copy
}

//deleteFromObjectByKey( { prop: 1 }, 'prop')

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes
}
