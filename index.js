var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var clone = Object.assign({}, obj, {[key]: val});
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, {[key]: val});
}

function deleteFromObjectByKey(obj, key) {
  var clone = Object.assign({}, obj);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}