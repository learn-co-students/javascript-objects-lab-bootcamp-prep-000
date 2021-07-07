var recipes = {breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.value
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, {[key]: ''})
}
