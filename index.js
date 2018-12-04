var recipes = {}

function updateObjectWithKeyAndValue(recipes, foodItem, value) {
  return Object.assign({}, recipes, { [foodItem]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, foodItem, value) {
   recipes[foodItem] = value
   return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[key]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
delete recipes[key]
return recipes
}