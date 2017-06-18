var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign ({}, object)
  delete newObj.key
  return newObj
}
var obj= {testing:"abc"}
console.log(deleteFromObjectByKey(obj, "testing"))

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
