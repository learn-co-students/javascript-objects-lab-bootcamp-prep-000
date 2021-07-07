var recipes = {'ingredient': 'amount'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

var newRecipes = Object.assign({},recipes);
newRecipes;

function deleteFromObjectByKey(object, key) {
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}




