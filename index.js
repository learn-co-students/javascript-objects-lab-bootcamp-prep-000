var recipes = {
  snacks: 'banana muffins',
  lunch: 'pbandj sandwich'
}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipes = Object.assign({}, recipes)
  newRecipes[key] = value;
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
recipes[key] = value;
return recipes
}

function deleteFromObjectByKey(recipes, key){
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[key];
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipe, key){
  delete recipe[key];
  return recipe
}
