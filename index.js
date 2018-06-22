var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  var result = Object.assign({}, object);
  result[key] = value
  return result
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var result = Object.assign({},object);
  delete result[key]
  return result
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}