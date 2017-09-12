var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign(object, {[key]: value})
    return object
  }

function deleteFromObjectByKey(object, key) {
  var Kenny = {}
  Object.assign(Kenny, object)
  delete Kenny[key]
  return Kenny
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
