var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object, {[key]: value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign(object, {[key]: value})
  return obj
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
