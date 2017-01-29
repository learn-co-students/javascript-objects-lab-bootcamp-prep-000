var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value

  return object
}

// results in a false positive
// function deleteFromObjectByKey(object, key) {
//   return Object.assign(object, [key])
// }

function deleteFromObjectByKey(object, key) {
    var newObject = Object.assign({}, object)
    delete newObject.key

  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]

  return object
}
