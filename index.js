var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
 return Object.assign ({}, recipes, { [key]:value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
return Object.assign ( recipes, { [key]:value })
}

function deleteFromObjectByKey() {
   
 var newRecipes = Object.assign ({}, recipes )
  delete newRecipes.key

  return newRecipes
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key]
  return recipes
}
