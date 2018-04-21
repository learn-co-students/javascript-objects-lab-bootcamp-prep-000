var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var key = Object.assign({}, object)
  return delete key.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
