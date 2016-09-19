var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, object, {[key]:value});
  return newobject
}

function deleteFromObjectByKey(object, key) {
  var newobject = Object.assign({}, object)
  delete newobject[key]
  return newobject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
