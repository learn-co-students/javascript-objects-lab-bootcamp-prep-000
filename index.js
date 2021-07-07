//1
var recipes = {}
//2 update
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value
  })
}
//3 destructively update
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return recipes
//non destructive
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return recipes
}
