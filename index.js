var recipes = {Cake: "Flour, Egg, & Milk"};

function updateObjectWithKeyAndValue(recipe, key, value) {
  
  return Object.assign({}, recipe, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe[key] = value 
  
  return recipe
}

function deleteFromObjectByKey(recipe, key) { 
  var newrecipe = Object.assign({},recipe)
  delete newrecipe[key]
  
  return newrecipe
}

function destructivelyDeleteFromObjectByKey(recipe, key) {
  delete recipe[key]
  
  return recipe
}