var recipes = {recipeName: "ingredient"};

function updateObjectWithKeyAndValue (recipes, recipeName, ingredient) {
  recipes[recipeName] = ingredient;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, recipeName, ingredient) {
  recipes[recipeName] = ingredient;
  return recipes;
}

function deleteFromObjectByKey (recipes, recipeName) {
  const newRecipe = Object.assign({}, recipes);
  delete newRecipe[recipeName];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey (recipes, recipeName) {
  delete recipes[recipeName];
  return recipes;
}