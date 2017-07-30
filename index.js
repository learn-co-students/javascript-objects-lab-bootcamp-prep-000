'use strict';
var recipes = {cake: 'delicious'};

function updateObjectWithKeyAndValue(object, key, value) {
  var clean = Object.assign({}, object);
  clean[key] = value;
  return clean;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clean = Object.assign({}, object);
  delete clean[key];
  return clean;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
