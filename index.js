var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newObj = delete object.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}







