var recipes = {clam: "clam chowder", beef: "beef stew"}
function updateObjectWithKeyAndValue(recipes, food, meal) {
  return Object.assign({}, recipes, {[food]: meal})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, food, meal) {
  recipes[food] = meal
  return recipes
}

function deleteFromObjectByKey(recipes, food) {
  Object.assign({}, recipes, [food])
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, food) {
  delete recipes[food];
  return recipes
}
