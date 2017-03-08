var recipes = {
  style: "ingredient",
  italian: "pasta",
  chinese: "rice"
};

function updateObjectWithKeyAndValue(recipes, style, ingredient) {
  return Object.assign({}, recipes, {[style]: ingredient})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, style, ingredient) {
  recipes[style]=ingredient
  return recipes
}

function deleteFromObjectByKey(recipes, style) {
  const newRecipes = Object.assign({}, recipes)
  delete newRecipes.style;
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, style) {
  delete recipes.style
  return recipes
}
