var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var upob = object[key]
  var newob = Object.assign(recipes, upob)
  return newob
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
