const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var objOut = Object.assign({}, object)
  objOut[key] = value
  return objOut
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var ObjClone = Object.assign({}, object)
  delete ObjClone[key]
  return ObjClone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}