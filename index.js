var recipes = { }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object'
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  // it('deletes `key` from a clone of object and returns the new object (it is non-destructive)',
  var copy = Object.assign({}, object)
  console.log(copy)
  delete copy[key]
  return copy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // it('returns object without the delete key/value pair',
  var copy = object
  console.log(copy)
  delete copy[key]
  return copy
}