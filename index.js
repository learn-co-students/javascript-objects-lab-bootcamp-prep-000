var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var updatedObject = Object.assign({}, object, { [key] : value });
  return updatedObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var updatedObjectDestructive = object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObjectDestructive = delete object[key];
  return newObjectDestructive;
}