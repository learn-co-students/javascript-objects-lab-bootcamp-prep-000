var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var tempObj = {};
  tempObj[key] = value;
  
  return Object.assign({}, object, tempObj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  
  delete clone[key];
  
  return clone;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  
  return obj;
}