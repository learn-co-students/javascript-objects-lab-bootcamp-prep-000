var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = {};
  newObj[key] = value;
  return Object.assign({}, object, newObj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  return delete object.key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}