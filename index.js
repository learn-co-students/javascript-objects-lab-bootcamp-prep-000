var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { [key]: value })
}
var object = {prop: 1}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object['prop2'] = 2
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
