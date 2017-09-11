var recipes = { ingredient: 'amount' };

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  return Object.assign({}, recipes, { [ingredient]: amount });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient, amount){
  var newRecipe = Object.assign({}, recipes, { [ingredient]: amount });
  delete recipes.amount;
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient){
  delete recipes[ingredient];
  return recipes;
}
