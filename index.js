var recipes = { food: "ingredient"};

function updateObjectWithKeyAndValue(recipes, food, ingredient){
  recipes[food] = ingredient;
  
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, food, ingredient){
 
  
  return  Object.assign({}, recipes, { [food]:ingredient });
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredient) {
  
  recipes[food] = ingredient;
  
  return recipes
}

function deleteFromObjectByKey(recipes, food) {
  var newRecipe = Object.assign ({}, recipes, food);
  
  delete newRecipe[food];
  
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, food){
  delete recipes[food];
  return recipes;
}