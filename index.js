var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj2 = {};
  obj2[key] = value;
  var newObject = Object.assign({}, object, obj2);
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj2 = Object.assign({}, object);
  // delete obj2.key;    will work
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
