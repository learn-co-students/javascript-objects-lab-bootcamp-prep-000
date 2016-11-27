var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var objClone = Object.assign({}, obj, {[key] : value});
  return objClone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var objClone = Object.assign({}, obj);
  delete objClone[key];
  return objClone;
}
