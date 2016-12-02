var recipes = {eggs : 3, flour : "half cup", sugar: "tablespoon"};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesClone;
  recipesClone = Object.assign({}, object, {[key] : value});
  return recipesClone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key] : value});
}

function deleteFromObjectByKey(object, key) {
  var reducedRecipe;
  reducedRecipe = Object.assign({}, object, delete object.key);
  return reducedRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return Object.assign(object, delete object [key]);
}
