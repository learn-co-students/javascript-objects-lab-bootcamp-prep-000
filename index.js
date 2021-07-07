var recipes = { eggs: 3,
bagel: 1,
butter: '1 tbs'
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, Object)
  delete newObject[key]
  return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object 
}