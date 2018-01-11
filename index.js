var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var objectCopy = Object.assign({}, object);
  delete objectCopy[key];
  return objectCopy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}