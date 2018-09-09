var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var object = {prop: 1, prop2:2};
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,prop){
  var newObject = Object.assign({}, object)
  delete newObject.prop
  return newObject
}

function destructivelyDeleteFromObjectByKey(object,prop){
  delete object.prop
  return object
}