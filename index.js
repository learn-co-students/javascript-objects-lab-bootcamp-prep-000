var recipes = {
  prop: 1,
  prop2: 2
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, {prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return recipes
 }

function deleteFromObjectByKey(obj, key){
  delete recipes.prop
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}