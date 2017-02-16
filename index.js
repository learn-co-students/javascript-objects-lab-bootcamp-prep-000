var recipes ={
  prop: 1,
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var recipesUpdate = Object.assign ({}, obj)
  delete recipesUpdate.key
  return recipesUpdate
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj.key
  return obj
}