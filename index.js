var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function deleteFromObjectByKey(obj, key) {
  var clone = Object.assign({}, obj);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  var clone = Object.assign(obj);
  delete clone[key];
  return clone;
}