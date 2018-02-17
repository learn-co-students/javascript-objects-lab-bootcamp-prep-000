var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, object, {[key]: value})
  return object, newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, object)
  delete newobj[key]
  return newobj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

