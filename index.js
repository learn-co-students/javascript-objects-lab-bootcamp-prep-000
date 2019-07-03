// define our empty recipes object to receive content
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
  
  /* assign the contents of the existing object to a new object, then add the new key and value to it preserving the old object.
  
  The first value of Object.assign() is the target object that gets modified, which is why we are sending it a blank object "{}" instead of our variable "object" */
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  let newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
  
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}