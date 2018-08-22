var recipes = {
  prop: 1,
  prop2: 2
}
function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop3 = 3;
  return Object.assign({}, recipes, {'prop': 1, 'prop2': '2'});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes
}
var newObj = Object.assign({}, recipes)

function deleteFromObjectByKey(object, key) {
  delete newObj.prop
  return newObj
}
function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop;
  return recipes;
}