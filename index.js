function Objects(){
  return Object.assign({}, {"ingredient": "value"});
}

var recipes = Objects();

function updateObjectWithKeyAndValue(list, ingredient, amount){
  var recipe = Object.assign({}, list, {[ingredient] : amount});
  return recipe;
}

function destructivelyUpdateObjectWithKeyAndValue(list, ingredient, amount){
  list[ingredient] = amount;
  return list;
}

function deleteFromObjectByKey(recipe, ingredient){
  var cloneRecipe = Object.assign({}, recipe);
  delete cloneRecipe[ingredient];
  return cloneRecipe;
}

function destructivelyDeleteFromObjectByKey(recipe, ingredient){
  delete recipe[ingredient];
  return recipe;
}


  
  
  
  
  
  
  
  
  
  
  