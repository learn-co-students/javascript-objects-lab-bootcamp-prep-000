var recipes = {}

function updateObjectWithKeyAndValue(obj, k, v){
  var newRecipes = Object.assign({}, obj)
  newRecipes[k] = v
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v){
  obj[k] = v
  return obj
}

function deleteFromObjectByKey(obj, k){
  var newRecipes = Object.assign({}, obj)
  delete newRecipes[k]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(obj, k){
  delete obj[k]
  return obj
}

