var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  return  Object.assign({}, obj, { [key]: value });
    
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value;
  return object
  
}

function deleteFromObjectByKey (object, key, value) {
  var object = Object.assign({}, object, { [key]: value });
  delete object.key;
  return object;
  
}

function destructivelyDeleteFromObjectByKey (object, key) {
 delete object[key];
 return object;
  
}