var recipes = {"lasagna": "noodles"}

function updateObjectWithKeyAndValue(recipes, dish, ingredient) {
  return Object.assign({}, recipes, { [dish]: ingredient })
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dish, ingredient) {
  recipes[dish] = ingredient
  return recipes
};

function deleteFromObjectByKey(recipes, dish, ingredient) {
  var newRecipes = Object.assign({}, recipes)
  delete dish[ingredient]
  return recipes
};

function destructivelyDeleteFromObjectByKey(recipes, dish, ingredient) {
  delete dish[ingredient]
  return recipes
}
