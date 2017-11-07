var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) { // non-destructively
  var obj = {key};
  var newObj = Object.assign({}, obj);
  delete newObj.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
