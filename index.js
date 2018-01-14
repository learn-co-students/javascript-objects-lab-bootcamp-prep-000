var recipes = {name: 'chocolate cake'}

function updateObjectWithKeyAndValue(object, key, value) {
  //non-destructive
  var newObject = Object.assign({}, object, {[key]:value})
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //destructive
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  //non-destructive
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  //destructive
  delete object[key]
  return object
}
