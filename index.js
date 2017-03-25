var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var objectCpy = Object.assign({}, object);
  delete objectCpy[key];
  return objectCpy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
