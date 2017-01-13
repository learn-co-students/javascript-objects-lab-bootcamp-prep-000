var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  var newObj = object;

  return newObj;
}

function deleteFromObjectByKey(object, key) {
  var newObj = object;

  delete newObj[object];

  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];

  return object;
}
