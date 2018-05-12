var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete recipes[key]
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}