var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var returnVal = Object.assign({}, object);
  returnVal[key] = value;
  return returnVal;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var returnVal = Object.assign({}, object);
  delete returnVal[key];
  return returnVal;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}