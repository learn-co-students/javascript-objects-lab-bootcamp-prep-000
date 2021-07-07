var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value}, object)
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key, value) {
  return delete object.key
}
function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key]
  return object
}