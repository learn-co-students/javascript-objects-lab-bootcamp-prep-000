var recipes = {};
var newObj = Object.assign({}, object);

function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  
  return object
  
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  return delete newObject.key
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
