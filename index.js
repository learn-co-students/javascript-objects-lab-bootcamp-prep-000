var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
var recipes = {prop:1};
return Object.assign({}, {prop:1}, {prop2: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject= Object.assign ({}, object);
  delete newObject [key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}