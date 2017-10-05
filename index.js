let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  let temp = Object.assign({}, object);
  temp[key] = value
  return temp
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let temp = Object.assign({}, object);
  delete temp[key]
  return temp
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
