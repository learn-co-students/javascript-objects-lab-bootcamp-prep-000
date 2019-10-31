var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key];
  return newObj;
}

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
// Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
