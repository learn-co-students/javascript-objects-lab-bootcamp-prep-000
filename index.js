var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = Object.assign({}, object, {[key]:value});//need [] when referencing key for key:value
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var recipes = Object.assign({}, recipes);
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[key];
  return recipes;
}
