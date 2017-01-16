var recipes = new Object()
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value

  return recipes
}
function deleteFromObjectByKey(object, key){
  delete object.key
  return object
}
function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes.key
  return recipes
}
