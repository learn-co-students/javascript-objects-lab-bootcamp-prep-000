var recipes = { }

/*
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value})
  return newObject
} 

*/
function updateObjectWithKeyAndValue(object, key, value) {
  var newPair = {[key]: value}
  var newObject = Object.assign({}, object, newPair)
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value 
  return object
}

function deleteFromObjectByKey(object, key) {
  /*
  var objectClone = Object.assign({}, object)
  var clone2 = delete objectClone.key
  return clone2
  */
  var clone = delete object.key
  return clone
} 
function destructivelyDeleteFromObjectByKey(object, key) {
  object = delete object[key]
  return object
}



  
