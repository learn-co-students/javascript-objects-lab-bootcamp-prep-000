var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key){
  var recipes = { object: 'key'}
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[object]
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}