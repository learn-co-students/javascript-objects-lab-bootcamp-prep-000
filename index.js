var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign(recipes, { prop2: 2 } )
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes.prop2 = 2
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.prop
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign({}, recipes)
  delete newObj.prop

  return newObj
}
