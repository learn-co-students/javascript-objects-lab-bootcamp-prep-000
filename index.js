var recipes = {
  flour: '1 cup',
  water: '1/2 cup'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = delete object.key
  return newObject

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
