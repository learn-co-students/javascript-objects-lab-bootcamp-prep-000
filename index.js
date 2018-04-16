var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var new_object = Object.assign({}, object)
  new_object[key] = value
  return new_object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key,value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var new_object = Object.assign({}, object)
  delete new_object[key]
  return new_object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

