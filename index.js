var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newThing = Object.assign({}, object);
  newThing[key] = value;
  return newThing;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
