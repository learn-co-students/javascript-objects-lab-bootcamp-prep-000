var recipes = {prop : 1}
function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
   var newObject = Object.assign({}, object)
   delete newObject[key]
   return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}