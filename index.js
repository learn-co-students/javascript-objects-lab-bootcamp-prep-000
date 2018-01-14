var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var objectClone = Object.assign({}, object, {[key]:value})
   return objectClone;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[[key]] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var objectClone = Object.assign({}, object)
  delete objectClone[[key]]
  return objectClone
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[[key]]
  return object
}
