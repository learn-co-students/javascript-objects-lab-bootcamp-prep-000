var recipes = new Object();


function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value})
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
};

function deleteFromObjectByKey(recipes, key) {
  const newRecipe = Object.assign({}, recipes);
  delete newRecipe[key];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}
