var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  {}[key], object[key] = value

  return object
}
function deleteFromObjectByKey(object, key){
  var object = {}
  delete {}.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
