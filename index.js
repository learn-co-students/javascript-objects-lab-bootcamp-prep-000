var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newObj = Object.assign({}, recipes, {[key]:value})  
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}
function deleteFromObjectByKey(object, key){
  delete recipes.key
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key
  return recipes
}