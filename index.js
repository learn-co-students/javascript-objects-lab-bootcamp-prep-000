var recipes = {
  meal: "",
  ingredient: ""
}

function updateObjectWithKeyAndValue(recipes, meal, ingredient) {
  return Object.assign({},recipes,{[meal]:ingredient})
  
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, meal, ingredient){
  recipes[meal] = ingredient;
  return recipes;
}

function deleteFromObjectByKey(recipes, meal){
  var newRecipes = {meal: "ingredient"};
  delete newRecipes[meal]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, meal){
  delete recipes[meal];
  return recipes
  
}