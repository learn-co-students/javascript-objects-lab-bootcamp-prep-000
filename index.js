var recipes = {
  "prop": "1",
  "prop2": "2"
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, key)
  delete newObject.key
  return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = undefined
  return object
}