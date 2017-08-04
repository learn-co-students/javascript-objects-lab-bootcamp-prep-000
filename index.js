var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value })
}

function deleteFromObjectByKey(recipes, key){
  var newObj = Object.assign({}, recipes)
  delete newObj.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}