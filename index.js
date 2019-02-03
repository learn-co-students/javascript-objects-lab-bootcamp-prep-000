const recipes = {
  ingredient1: 'sugar',
  ingredient2: 'flour',
  ingredient3: 'eggs'
}

function updateObjectWithKeyAndValue(object, key, value) {
var newObject = Object.assign({}, object, { [key]: value })
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var deletedObj = delete object.key
  return deletedObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

