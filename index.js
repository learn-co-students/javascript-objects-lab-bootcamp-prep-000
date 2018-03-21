var recipes = {
  pumpkin: "one can",
  sugar: "1 cup",
  molasses: "1/4 cup",
}

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  Object.assign ({}, recipes, {[ingredient]: amount})
  return recipes
}