var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var dupe = Object.assign({}, object)
  delete dupe[key]
  return dupe
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
