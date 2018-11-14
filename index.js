var recipes = new Object ({});
var obj = { prop: 1 }
var newObject = Object.assign({}, obj);

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key){
  
  delete newObject[key];
  return newObject
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  
  delete object[key]
  return object
  
}