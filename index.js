var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1, prop2: 2});
}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  return delete object[key];
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({});
  delete newObj[key];
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}