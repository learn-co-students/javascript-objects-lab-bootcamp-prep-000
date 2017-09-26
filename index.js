var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var cpy = Object.assign({}, object);
  delete cpy[key];
  return cpy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
