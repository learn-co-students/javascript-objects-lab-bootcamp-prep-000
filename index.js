var recipes = {prop: '1'}

function updateObjectWithKeyAndValue() {
  recipes.prop2 = '2'
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}

var recipes = {prop: '1'}

function deleteFromObjectByKey(recipes, prop) {
  Object.assign(recipes, {})
  return Object
}

var recipes = {prop: '1'}

function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop
  return recipes
}
