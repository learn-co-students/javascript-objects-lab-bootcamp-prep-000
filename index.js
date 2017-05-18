var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newBook = object
  newBook = Object.assign({}, newBook, {[key]: value})
  return newBook
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
