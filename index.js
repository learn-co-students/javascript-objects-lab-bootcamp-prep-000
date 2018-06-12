var recipes = {};

function updateObjectWithKeyAndValue (recipes, newKey, newValue){
  var copy = Object.assign({}, recipes);
  copy[newKey]=newValue;
  return copy; 
}



function deleteFromObjectByKey(recipes, typesOfRecipes){
  return delete typesOfRecipes.mexican;
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, typesOfRecipes, cuban){
  recipes [typesOfRecipes] = cuban;
  return recipes;
}

function destructivelyDeleteFromObjectByKey (recipes, newKey, newValue){
  var newRecipes = Object.assign ({},recipes);
  recipes[newKey]=newValue;
 return delete newRecipes.newKey;
}


