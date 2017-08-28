var recipes = {};

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

var obj = { prop: 1 };
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

var obj = { prop: 1 };
function deleteFromObjectByKey(object, key) {
  var newObj = delete obj.key;
  return newObj;
}

var obj = { prop: 1 };
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
