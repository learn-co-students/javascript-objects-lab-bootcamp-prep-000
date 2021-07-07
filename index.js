var recipes = { ingredient: "amount" }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object
  newObject[key] = value
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = object
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
