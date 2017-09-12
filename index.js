var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object;
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = object;
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var obj = object;
  var newObj = delete obj.key;
  return newObj;
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = object;
  delete obj[key];
  return obj;
}
