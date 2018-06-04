var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { 
  //object[key] = value
  var newPair = Object.assign({}, object, { [key]: value })
  return newPair
  //return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  //beforeDeletion = object[key] = value
  var afterDeletion = Object.assign({}, object[key])
  delete object.key
  return afterDeletion
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}