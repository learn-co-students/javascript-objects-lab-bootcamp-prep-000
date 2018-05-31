var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  
  var newRecipes = Object.assign({}, object, key, value)
  newRecipes[key] = value
  return newRecipes

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  return object
  
}


function deleteFromObjectByKey(object, key) {
  
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject

  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key]
  return object
  
}



