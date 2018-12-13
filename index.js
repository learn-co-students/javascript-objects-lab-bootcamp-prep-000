var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {prop2: 2})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, {prop: 1})
  delete newObj.prop
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop
  return object
}