var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var k = key;
  object[k] = value;
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var k = key;
  object[k] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.object;
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var k = key;
  delete object[k];
  return object
}
