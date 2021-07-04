var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}
var object = {recipes:1}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes);
  delete newObj.key;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  var recipes = delete recipes.key
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return recipes;
}