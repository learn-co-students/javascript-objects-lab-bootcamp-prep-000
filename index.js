var recipes = {}
// work here
function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object, {[key]: value})
  return newObject
}

//work here
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value){
  var newObject = Object.assign({}, object, {key: value})
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

/*
function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object, {key: value})
  return newObject
}

//work here
function destructiveUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value
  return object
}

*/
