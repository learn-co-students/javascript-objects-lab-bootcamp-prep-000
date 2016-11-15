var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObjectToDeleteKey = Object.assign({}, object)
  delete newObjectToDeleteKey[key]
  return newObjectToDeleteKey
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
    return object
}
