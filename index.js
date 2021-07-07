var recipes = ({prop: `ing`})

function updateObjectWithKeyAndValue(recipes, prop2, ing2) {
  return Object.assign({}, recipes, {[prop2]: ing2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop3, ing3) {
  recipes[prop3] = ing3;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop;
  return recipes;
}

function deleteFromObjectByKey(recipes, prop) {
  var Recipes = Object.assign({}, recipes);
  delete Recipes.prop;
  return Recipes;
}