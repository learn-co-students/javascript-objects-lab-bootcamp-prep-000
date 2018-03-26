var recipes = {
  pumpkin: "one can",
  sugar: "1 cup",
  molasses: "1/4 cup",
}

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  return Object.assign ({}, recipes, { [ingredient]: amount})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign(recipes, { [ingredient]:amount})
}

function deleteFromObjectByKey(recipes, ingredient) {
  var pie = Object.assign ({}, recipes)
  delete pie[ingredient]
  return pie
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient]
  return recipes
}