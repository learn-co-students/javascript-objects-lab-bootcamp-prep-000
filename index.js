var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign({}, object)
  copy[key] = value
   return copy
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey (object, key) {
var copy = Object.assign({}, object)
return delete copy.key
}
function destructivelyDeleteFromObjectByKey (object, key) {
   delete object[key]
   return object
}
