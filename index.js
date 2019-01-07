var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {  
 return Object.assign({}, object, {[key]: value})  

}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value)
{
  recipes[key] = value

  return recipes
}

function deleteFromObjectByKey (recipes, key)
{
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[key]
  return newRecipes;
  
}

function destructivelyDeleteFromObjectByKey(recipe, key){  
delete recipe[key];  
  return recipe  
}
