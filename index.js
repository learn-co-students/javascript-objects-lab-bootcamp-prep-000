var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  Object.assign({}, object, { k: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
