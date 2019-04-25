var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  // modifies non-destructively using Object.assign ({}, object, key: value)
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value  // returns value
  return object
}


function deleteFromObjectByKey(object, key) {
  return delete Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}