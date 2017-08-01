var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {

  var newObj = Object.assign({}, object, {key : value})
  newObj[key] = value;
  return object, newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object, key) {
var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
