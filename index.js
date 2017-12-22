var recipes = {
  cake: "chocolate",
  cake: "carrot"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return recipes.cake = { prop: 1, prop2: 2 }
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = {object, key}
  var newObj = Object.assign({}, obj)
  delete newObj.object
}
function deleteFromObjectByKey(object, key) {
  var obj = {object, key}
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {object, key}
  var newObj = Object.assign({}, obj)
    return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
