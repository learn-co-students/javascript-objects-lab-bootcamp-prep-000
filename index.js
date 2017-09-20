var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObject = object
  return delete newObject.key
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
