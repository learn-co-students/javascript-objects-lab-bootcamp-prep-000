var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newobj = Object.assign({}, object, {[key]: value})
  return newobj
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
var deleteFromObjectByKey = (object, key) => {
  var newobj = Object.assign({}, object)
  newobj = destructivelyDeleteFromObjectByKey(newobj, key)
  return newobj
}