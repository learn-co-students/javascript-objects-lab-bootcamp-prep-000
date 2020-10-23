
// updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, { [key]: value
  })
  return newObj
}

// destructivelyUpdateObjectWithKeyAndValue(object, key, value)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// deleteFromObjectByKey(object, key)
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}


// destructivelyDeleteFromObjectByKey(object, key)
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
