var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign ({}, {key: value})
  return Object.assign({prop: 1}, {prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value
  return object
}
function deleteFromObjectByKey(object, key) {
  delete object.key 
  return key 
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}