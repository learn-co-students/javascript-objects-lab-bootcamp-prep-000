var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value }) // non-destructive Addition!
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value // destructive Addition!
  return object
}
function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object) // non-destructive deletion!
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key] // destructive deletion!
  return object
}
