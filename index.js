var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
var toMatch = {key: "value"}
function deleteFromObjectByKey(object, key) {
var toMatch = Object.assign({}, deleteFromObjectByKey)
return toMatch
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
