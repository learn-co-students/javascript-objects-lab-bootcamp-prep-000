var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1, prop2: 2}
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}

var obj = {foo: 'bar'}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  newObj
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}