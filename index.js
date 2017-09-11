var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){

  return Object.assign({}, recipes, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes,key){
/*
  var copy = recipes
  delete copy[key]
  return copy
*/
  Object.assign({}, recipes)
  delete Object[key]
  return Object
}

function destructivelyDeleteFromObjectByKey(recipes,key){
  delete recipes[key]
  return recipes
}
