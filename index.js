var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, { [key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value){
  var object = { key: 'value'}
  var newObject = Object.assign({}, object)
  newObject
  delete newObject.key
  newObject
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
