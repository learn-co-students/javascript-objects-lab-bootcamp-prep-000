var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(obj, key) {
  var copy = Object.assign({}, obj);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
