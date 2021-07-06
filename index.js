var recipes = new Object({pasta: "tomatos"});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
function deleteFromObjectByKey(object, key) {
  var newrecipe = Object.assign({}, object)
  delete newrecipe[key];
  return newrecipe
}
