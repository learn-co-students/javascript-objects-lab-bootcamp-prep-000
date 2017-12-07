var recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
  var newPair = {[key]: value}
  var newObject = Object.assign({}, object, newPair)
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var clone = delete object.key
  return clone
}
function destructivelyDeleteFromObjectByKey(object, key){
  object = delete object[key]
  return object
}
