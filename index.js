var recipes = new Object({key:'value'});
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}
function deleteFromObjectByKey(obj, key) {
  var clone = Object.assign({}, obj)
  delete clone[key]
  return clone
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return recipes
}
