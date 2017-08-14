var recipes = new Object()

function updateObjectWithKeyAndValue(obj, k, v) {
  var newRecipes = Object.assign({}, obj, {[k]: v});
  return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  obj[k] = v;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newRecipes = Object.assign({}, obj)
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k];
  return obj;
}
