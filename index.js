//var recipesArr = { foo: 'bar' }
//var recipes = Object.assign({}, recipesArr)
var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var objectNew = Object.assign({}, object)
  delete objectNew[key]
  return objectNew
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
