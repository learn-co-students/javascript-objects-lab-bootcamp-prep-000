var recipes = {}
function updateObjectWithKeyAndValue(object1, key, value) {
  return Object.assign({},object1, {[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object3, key, value) {
  var object3 = Object.assign(object3, {[key]:value})
  return object3
}
function deleteFromObjectByKey(object4, key) {
  var object5 = Object.assign({},object4)
  delete object5[key]
  return object5
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
