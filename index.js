var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, object)
  newobject[key] = value
  return newobject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var objclone = Object.assign([], object)
  delete objclone[key]
  return objclone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}