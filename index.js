var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var object = { prop: 1 }
  object[key] = value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var object = { prop: 1 }
  var newObj = delete object[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
