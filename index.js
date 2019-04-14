var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({}, object, {[key]: value})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  console.log(newObj)
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
