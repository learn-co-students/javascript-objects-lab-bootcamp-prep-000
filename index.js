var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var new_object = Object.assign({}, object, {[key]:value})
  return new_object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var sweet = Object.assign({}, object)
  delete sweet[key]
  return sweet
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

