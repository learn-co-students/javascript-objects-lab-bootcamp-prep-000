var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj = Object.assign({}, obj, {[key] : value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}
