var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  
  recipes[key] = value
  
  const newRecipe = Object.assign({}, recipes)
  
  newRecipe[key] = value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes.key = value
  return recipes
}