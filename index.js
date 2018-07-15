var recipes = {prop: 1};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObject = Object.assign({}, obj)
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
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
