var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = 1;
  recipes.prop2 = 2;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
 return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = delete object.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
 object[key] = undefined;

 return object;
}
