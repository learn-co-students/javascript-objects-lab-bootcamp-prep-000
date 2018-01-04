var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1, prop2: 2}
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, key)
  delete newObj.key
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
