var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var arr = object;
  arr[key] = value;
  return arr;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var off = Object.assign({}, object);
  delete off[key];
  return off;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}