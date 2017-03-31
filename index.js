// define a recipe object
var recipes = {}

// Objects updateObjectWithKeyAndValue(object, key, value) returns a clone of `object` by adding `key` and `value` (it is non-destructive)
function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

// Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive)
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value 
  return object
}

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive)
var newObj = Object.assign({}, recipes)
function deleteFromObjectByKey (object, key) {
  delete newObj.key // could have also used delete newObj[key]
  return newObj
}

//Objects destructivelyDeleteFromObjectByKey(object, key) deletes `key` from object and returns object
function destructivelyDeleteFromObjectByKey (object, key) {
  delete object.key // could have also used delete object[key]
  return object
}
