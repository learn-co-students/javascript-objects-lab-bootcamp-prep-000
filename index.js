var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, { [k]: v });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, k) {
  // non-destructive also passes test (9/24/16). An issue has been raised
  delete object[k];
  return object;
}

function deleteFromObjectByKey(obj, k) {
  var newObj = Object.assign({}, obj);
  delete newObj[k];
  return newObj;
}
