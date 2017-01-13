var recipes = {}
//defines a `recipes` object

function updateObjectWithKeyAndValue(object, key, value) {
  //returns a clone of `object` by adding `key` and `value`
  // (it is non-destructive):
  //use object assign?
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //updates `object` with the given `key` and `value` (it is destructive)
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  //deletes `key` from a clone of object and returns the new object (it
  //is non-destructive)
  var updatedObject = Object.assign({}, object)
  delete updatedObject[key]
  return updatedObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  //deletes `key` from object and returns object
  delete object[key]
  return object;
}
