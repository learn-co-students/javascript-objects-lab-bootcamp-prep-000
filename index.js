
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var cpy = {}
  var obj = {prop: "1"}
  var cpy = Object.assign({prop2: "2"}, obj)
  return cpy
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: "value"}
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {key: "value"}
  delete obj.key
  return obj
}
