var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var aux = Object.assign({}, object)
  delete aux[key]
  return aux
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}