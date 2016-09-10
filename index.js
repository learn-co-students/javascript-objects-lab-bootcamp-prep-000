var recipes = {
  flour: "3 cups",
  water: "1 cup",
  eggs: "3"
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function updateObjectWithKeyAndValue(obj, key, value) {
obj[key] = value
var newObj = Object.assign({}, obj)
  return newObj
}

function deleteFromObjectByKey(object, key) {
  var obj = {prop: '1'}
  delete obj[key]
  var newObj = Object.assign({}, obj)
  return newObj
}
