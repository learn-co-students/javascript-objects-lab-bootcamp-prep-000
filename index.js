var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var newObject = Object.assign({}, obj, {[key]: val});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, {[key]: val});
}

function deleteFromObjectByKey(obj, key) {
  var newObject = Object.assign({}, obj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

