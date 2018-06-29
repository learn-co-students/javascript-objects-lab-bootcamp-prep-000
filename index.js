var recipes = {
  
}

function updateObjectWithKeyAndValue(recipes, cake, flour){
  return Object.assign({}, recipes, { [cake]: flour })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, cake, flour) {
  recipes[cake] = flour
  
  return recipes
}

function deleteFromObjectByKey (recipes, cake){
  var newRecipe = Object.assign ({}, recipes)
  
  delete newRecipe[cake]
  
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipes, cake){
  delete recipes[cake]
  
  return recipes
}