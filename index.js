<<<<<<< HEAD
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
=======
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
>>>>>>> 94d4e76676bad480b5b7d5bef634f3e12c5aef77
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
<<<<<<< HEAD
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
=======
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
>>>>>>> 94d4e76676bad480b5b7d5bef634f3e12c5aef77
  return object;
}