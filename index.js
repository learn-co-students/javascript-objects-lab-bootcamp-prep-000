var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneobject = Object.assign({},object)
  cloneobject[key] = value
  return cloneobject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var cloneobject = Object.assign({},object)
  delete cloneobject[key]
  return cloneobject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
