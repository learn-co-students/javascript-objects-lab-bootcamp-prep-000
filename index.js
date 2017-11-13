var recipes = new Object();

// updateObjectWithKeyAndValue
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

// destructivelyUpdateObjectWithKeyAndValue
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// deleteFromObjectByKey
function deleteFromObjectByKey(object, key) {
  Object.assign({}, object)
  return delete object.key
}

// destructivelyDeleteFromObjectByKey
function destructivelyDeleteFromObjectByKey(object, key) {
  Object.assign(object, key)
  return delete object[key]
}
