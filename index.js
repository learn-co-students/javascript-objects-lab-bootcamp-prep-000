var recipes = new Object()
















function updateObjectWithKeyAndValue(object, key, value){
  var obj1 = Object.assign ({}, object)
  obj1[key] = value
  return obj1
}













function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}




var newRecipes = Object.assign({}, recipes)

function deleteFromObjectByKey(object, key){
  object = newRecipes
  delete newRecipes.key
  return newRecipes
}



function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}






















