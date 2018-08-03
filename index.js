var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var newrecipes = Object.assign({}, recipes)
  delete newrecipes[key]
  return newrecipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}