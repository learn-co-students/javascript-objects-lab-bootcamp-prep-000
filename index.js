var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newRecipe = Object.assign({}, object, {[key]: value})
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[`${key}`] = `${value}`;
  return object
}

function deleteFromObjectByKey(object, key) {
  let newRecipe = Object.assign({}, object);
  delete newRecipe[`${key}`];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[`${key}`];
  return object;
}
