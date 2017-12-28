var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj =  Object.assign({}, obj, {key, value})
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var cloneObject =  Object.assign({}, obj)
  delete cloneObject[key]
  return cloneObject
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
