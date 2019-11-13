var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
//does not modify the original
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  return newObj
}
//deletes key from clone of obj and returns newObj
function deleteFromObjectByKey(object, key) {
    var newObj = Object.assign({}, key)
    delete[newObj]
    return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  return object
}
//delete object, then return modified object
function destructivelyDeleteFromObjectByKey(object, key) {
  //don't forget object[key] syntax
  delete object[key]
  return object
}