var recipes = new Object()
function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign(object, {[key]: value})
  return copy
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  delete recipes[key]
  return Object.assign({}, object)
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[key]
  return object 
}
