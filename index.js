var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var objectMod = Object.assign({}, object);
  delete objectMod[key];
  return objectMod;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
