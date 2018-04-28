var key
var value
var recipes = {key: value}
function updateObjectWithKeyAndValue(object,key,value) {
    var newObj = Object.assign({},object,key,value)
    newObj[key] = value
    return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object,key) {
  var newObj = Object.assign({},object,key)
  delete newObj[key]
  return newObj
}