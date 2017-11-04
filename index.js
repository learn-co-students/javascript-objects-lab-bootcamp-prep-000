var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var copy = Object.assign({}, obj); //cloning obj to the copy Object
  delete copy[key];
  return copy;
}

/*
function deleteFromObjectByKey(object, key) {
  var newObject = delete object.key;
  return Object.assign({}, newObject)
}
*/

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
