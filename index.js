var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object, {[key]: value})
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var n_object = Object.assign({}, object)
  delete n_object[key]
  return n_object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}


  
