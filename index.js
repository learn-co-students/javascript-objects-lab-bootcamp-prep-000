var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {}
  obj[key] = value
  var newObj = Object.assign({}, object, obj)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key) {
  var clone = Object.assign({}, object)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
