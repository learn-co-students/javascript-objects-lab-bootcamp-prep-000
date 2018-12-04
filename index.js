var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(recipes, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  Object.assign(recipes, object);
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
