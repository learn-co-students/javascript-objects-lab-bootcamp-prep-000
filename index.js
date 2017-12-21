var recipes = {
  prop: 1,
  prop2: 2
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, {prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[prop] = 1
  recipes = { prop: 1} 
  return recipes
}

function deleteFromObjectByKey(obj, key){
  delete recipes.prop
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop
  return recipes
}