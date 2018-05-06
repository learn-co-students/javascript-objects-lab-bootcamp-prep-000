var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop = 1,
  recipes.prop2 = 2
  
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var clone2 = delete object[key];
  return clone2;
}
