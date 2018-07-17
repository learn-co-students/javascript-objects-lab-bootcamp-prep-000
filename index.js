var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


var newObj = Object.assign({}, obj)
var obj = { key: value }

function deleteFromObjectByKey(object, key) {
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}