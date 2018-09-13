var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  var clone = Object.assign({}, obj);
  clone[key] = value;
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}