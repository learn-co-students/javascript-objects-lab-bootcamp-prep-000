var recipes = {}
var obj = {}


function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(object, key) {
  delete obj.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete obj.key
  return obj
}
