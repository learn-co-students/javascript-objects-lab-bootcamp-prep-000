var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign(recipes, {prop:1})
  Object.assign(recipes, {prop2:2})
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key,value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key){
  var newObj = delete Object.key
  return newObj
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
  
}
