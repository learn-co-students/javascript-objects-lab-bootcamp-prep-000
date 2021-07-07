var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  Object.assign(recipes, {[key]: value});
  return recipes;
}

function deleteFromObjectByKey (object, key) {
  var newObj = delete object.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  return delete object[key];
}