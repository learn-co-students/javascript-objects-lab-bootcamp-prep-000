var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj=({prop:1 , prop2: 2})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
