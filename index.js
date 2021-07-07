var recipes = {}
function updateObjectWithKeyAndValue (object, key, value) {
   return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign(object, {[key]: value})
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({key}, object)
  delete newObj[key]
  return newObj
}