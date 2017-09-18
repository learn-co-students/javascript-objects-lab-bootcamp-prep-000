var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { [key]: value}
  var newObj = Object.assign({}, object, obj)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, [key])
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
