
var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newObj = delete recipes.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.prop;
  return recipes;
}
