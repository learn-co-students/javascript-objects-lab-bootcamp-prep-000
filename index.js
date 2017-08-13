var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var new_object = Object.assign(recipes, object, {[key]: value});
  return new_object;
};

var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
};

var recipes = {};

function deleteFromObjectByKey(object, key) {
  var new_object = Object.assign(recipes, object);
  delete new_object[key];
  return new_object;
};

var recipes = {};

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
};
