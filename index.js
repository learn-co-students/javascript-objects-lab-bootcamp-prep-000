var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var retval = Object.assign({}, object)
  delete retval[key]
  return retval
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
