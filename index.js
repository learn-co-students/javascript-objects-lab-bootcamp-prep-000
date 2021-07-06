var recipes = {}

function updateObjectWithKeyAndValue (obj,key,val) {
  return Object.assign({[key]:val},obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey(obj,key) {
  var newObj = Object.assign({},obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  return delete obj[key]
}