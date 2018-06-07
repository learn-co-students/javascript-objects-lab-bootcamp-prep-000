var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var tmp = Object.assign({}, object);
  tmp[key] = value;
  return tmp;
}

function deleteFromObjectByKey(object, key) {
  var tmp = Object.assign({}, object);
  delete(tmp[key]);
  return tmp;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete(object[key]);
  return object;
}
