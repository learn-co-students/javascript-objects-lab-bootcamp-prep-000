var recipes = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}