var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  var fnObj = object;
  fnObj[key] = value;
  return fnObj;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var fnObj = object;
  delete fnObj.key;
  return fnObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
