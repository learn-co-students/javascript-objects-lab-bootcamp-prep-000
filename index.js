var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var cloneObject = Object.assign({}, object)
  cloneObject[key] = value
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var cloneObject = Object.assign({}, object)
  delete cloneObject[key]
  return cloneObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}