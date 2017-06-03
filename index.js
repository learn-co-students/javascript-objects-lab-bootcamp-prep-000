var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign({}, object, { [key]: value});
  return copy;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
