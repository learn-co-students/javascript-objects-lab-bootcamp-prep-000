var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value

  return Object.assign({}, object, recipes)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
