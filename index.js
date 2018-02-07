var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var o = Object.assign({}, object);
  o[key] = value;
  return o;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var o = Object.assign({}, object);
  delete o[key];
  return o;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
