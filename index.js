var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  //return Object.assign({}, targetObject, updatesObject)
  //clone object, then add key value pair to cloned object
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//Need to remember this one!
//return Object.assign({}, targetObject, updatesObject)
//clone object, then delete from cloned object
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
