var recipes=new Object({})

function updateObjectWithKeyAndValue(obj, key, value){
  var newRecipes = Object.assign({}, obj, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newRecipes = Object.assign({}, obj)
  delete newRecipes[key]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
