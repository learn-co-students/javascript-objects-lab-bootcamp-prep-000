var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value 
 return object
}

function updateObjectWithKeyAndValue(object, key, value){
  var Copy = Object.assign({}, object, {[key]: value});
  return Copy
}

function deleteFromObjectByKey(object, key){
  var deleteCopy = Object.assign({}, object);
  delete deleteCopy[key];
  return deleteCopy
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}