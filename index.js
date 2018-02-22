var recipes = {
  "food1":"ingredient1",
  "food2":"ingredient2"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var temp = Object.assign({}, object)
  delete temp[key]
  return temp
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}