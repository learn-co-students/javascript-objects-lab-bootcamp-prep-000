var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({}, object, {[key]: value})
  return object2
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}
function deleteFromObjectByKey(object, key) {
  var objectClone = Object.assign({},object)
  delete objectClone
  return objectClone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
