var recipes = {
  prop: '1'
}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return Object.assign({}, recipes,{[prop2]: '2'})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}
function deleteFromObjectByKey(recipes, prop) {
 return Object.assign({}, recipes,{[prop]:undefined})
}
function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes.prop
  return recipes
}