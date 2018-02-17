var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  Object.assign(newObj, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
