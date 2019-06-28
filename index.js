var recipes = { 
  breakfast: "cliff bar",
  lunch: "takis",
  dinner: "hot pocket"
}

function updateObjectWithKeyAndValue (recipes, snack, apple) {
  return Object.assign({}, recipes, {[snack]:apple})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, snack, apple) {
  recipes[snack] = apple;
  return recipes
}

function deleteFromObjectByKey (recipes, snack) {
  var newObj=Object.assign({}, recipes)
  delete newObj[snack]
  return newObj
}

function destructivelyDeleteFromObjectByKey (recipes, snack) {
  delete recipes[snack]
  return recipes
}