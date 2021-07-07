var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var cloned = Object.assign({}, object)
  delete cloned[key];
  return cloned;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
