var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  //return Object.assign({}, targetObject, updatesObject)
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//Need to remember this one!
//return Object.assign({}, targetObject, updatesObject)
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
