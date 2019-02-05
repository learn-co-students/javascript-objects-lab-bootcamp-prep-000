var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key] : value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//var object = {foo: 'bar'};

//var newObj = Object.assign({}, object)

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}