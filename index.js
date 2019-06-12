var recipes = new Object();


function updateObjectWithKeyAndValue (object, key, value) {
  var clone = Object.assign({}, object, { [key] : value });
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key] : value });
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  
  delete clone[key];
  
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  
  return object;
}