var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = value
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object)
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
