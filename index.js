var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var recipeh = Object.assign({}, obj, {[key]: value})
  return recipeh
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var recipeh = Object.assign({}, obj)
  
  delete recipeh[key]
  
  return recipeh
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}