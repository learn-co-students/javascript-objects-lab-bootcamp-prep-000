var recipes = {cake: 'eggs'}

function updateObjectWithKeyAndValue(recipes, a, b) {
  return Object.assign({}, recipes, {[a] : b})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, a, b) {
  object[a] = b
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; 
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes);
  delete newRecipes.key; 
  return newRecipes
  
}