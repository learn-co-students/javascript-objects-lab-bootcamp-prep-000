var recipes = {
  'chocolate chips': '1 bag'
}

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  var newRecipe = Object.assign({}, recipes, {[ingredient]:amount})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient]=amount
  return recipes
}

function deleteFromObjectByKey(recipes, ingredient){
  var newRecipe = Object.assign({},recipes)
  delete newRecipe[ingredient]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient){
  delete recipes[ingredient]
  return recipes
}
