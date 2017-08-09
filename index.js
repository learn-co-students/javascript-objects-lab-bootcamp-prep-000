var recipes = {"ingredient": "amount"};

function updateObjectWithKeyAndValue (recipes, ingredient, amount) {
  return Object.assign({}, recipes, { [ingredient]: amount })
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes
}

function deleteFromObjectByKey (ingredient, amount) {
  delete Object.assign({ [ingredient]: amount })
  return Object.assign({ [ingredient]: amount })
}

function destructivelyDeleteFromObjectByKey (ingredient, amount) {
  delete ingredient[amount];
  return recipes
}
