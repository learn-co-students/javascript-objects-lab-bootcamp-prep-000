var recipes = new Object ({})
var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(recipes, prop) {
  delete (1).prop
}
function  deleteFromObjectByKey(recipes, obj) {
  return Object.assign({},)
}
function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop
  return recipes
}
