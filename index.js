var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var x = Object.assign({}, object, {[key]: value})
  return x
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var x = Object.assign({}, object)
  delete x[key]
  return x
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

console.log(updateObjectWithKeyAndValue())
