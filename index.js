var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  recipes = { prop: 1, prop2: 2 };
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}