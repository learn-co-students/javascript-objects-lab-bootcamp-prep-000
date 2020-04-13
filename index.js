
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object, {[key]: value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, {[key]: undefined})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
