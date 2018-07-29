var recipes = {meal: "food"};

function updateObjectWithKeyAndValue(recipes, meal, food){
  return Object.assign({}, recipes, {[meal]: food})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, meal, food){
  recipes[meal] = food
  return recipes
}

function deleteFromObjectByKey(recipes, meal){
  var newRecipes = Object.assign({}, recipes)
  return delete newRecipes.meal
}

function destructivelyDeleteFromObjectByKey(recipes, meal){
  return delete recipes[meal]
}