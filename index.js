var recipes = {};


function updateObjectWithKeyAndValue(obj, key, val) {
  var newObject = Object.assign({}, obj);
  newObject[key] = val;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObject = Object.assign({}, obj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
    delete obj[key];
    return obj;
}