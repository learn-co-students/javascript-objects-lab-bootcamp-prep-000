var recipes = { key: 'value'}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign(object, { [key]:  value})
  return newObject
}
function deleteFromObjectByKey(object, key) {
  var object = [key]
  var newObject = Object.assign(object, [key])
  delete newObject[key]
  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var object = [key]
  var newObject = Object.assign(object, [key])
  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]

   return object
}
