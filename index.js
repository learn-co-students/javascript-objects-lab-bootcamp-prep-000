var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val) {
  return Object.assign({[key]: val}, obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey(obj,key) {
  var nobj = Object.assign({}, obj)
  delete nobj[key]
  return nobj
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return obj
}