
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete (Object.assign({}, object)).key
  return {}
}



function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

// above not working in console, error in code somewhere - 12/13/17
