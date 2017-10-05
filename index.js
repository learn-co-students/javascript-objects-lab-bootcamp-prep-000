//Pay attention - this is how you use clones to modify objects non-destructively.

//Also, when using Object.assign(), make sure the first value is a blank object - that's our clone slate.
//---Object.assign() makes its changes to the first value.

var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
