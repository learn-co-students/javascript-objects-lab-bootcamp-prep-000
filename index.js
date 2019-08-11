var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
  var objectToReturn = Object.assign({}, object);
  delete objectToReturn[key];
  return objectToReturn;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}