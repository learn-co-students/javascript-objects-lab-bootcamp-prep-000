var recipes = { foodType: "ingredient" };

function updateObjectWithKeyAndValue(recipes, foodType, ingredient) {
  return Object.assign({}, recipes, { [foodType]: ingredient })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, foodType, ingredient) {
  recipes [foodType] = ingredient
  return recipes
}

function deleteFromObjectByKey(foodType, ingredient) {
  var newrecipes = Object.assign({}, recipes, { [foodType]: ingredient })
  delete newrecipes.foodType;
  return newrecipes
}

function destructivelyDeleteFromObjectByKey(recipes, foodType) {
  delete recipes [foodType];
  return recipes
}
