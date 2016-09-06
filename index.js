const recipes = {
  food1: 'item1'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneO = object;
  cloneO[key] = value;
  return cloneO;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var temp = Object.assign({}, object);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}
