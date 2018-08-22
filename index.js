var recipes = { key: "object"}

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes = Object.assign({}, object, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
  delete newObj.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.object
  return recipes
}