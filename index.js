var recipes = {};
var newObj = object.assign ({}, obj);

function updateObjectWithKeyAndValue (object, key, value) {
  recipes.update = (object, key, value);
  return recipes;
}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey (object, key) {
  object = {};
  return object;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}
