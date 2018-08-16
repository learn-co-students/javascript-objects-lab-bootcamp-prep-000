var recipes = { key: "object" }

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { [key]: value}
  return Object.assign({}, object, obj)
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = { [key]: undefined }
  var object2 = Object.assign({}, object, obj)
  return object2
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}