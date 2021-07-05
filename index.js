let recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function updateObjectWithKeyAndValue(object, key, value) {
  let clone = Object.assign({}, object, {[key]: value})
  return clone
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  let clone = Object.assign({}, object)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}