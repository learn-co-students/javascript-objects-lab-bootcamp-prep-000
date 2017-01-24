var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({},object);
  delete newObject[key]
  return newObject
}
