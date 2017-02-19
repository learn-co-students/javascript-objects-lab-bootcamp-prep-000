var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var baseObject = {[key]:value}
  var newObject = Object.assign(object, baseObject)
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object

}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
