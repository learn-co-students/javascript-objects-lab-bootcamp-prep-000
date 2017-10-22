var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {};

  for (var i in object) {
    obj[i] = object[i];
  }
  obj[key] = value;

  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = {};

  for (var i in object) {
    obj[i] = object[i];
  }
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object;
}
