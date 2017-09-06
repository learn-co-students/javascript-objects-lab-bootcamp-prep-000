var recipes = {};
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]= value
  return recipes;
}
var recipes = {}
function deleteFromObjectByKey(object, key){
  delete recipes.key
  return Object.assign({}, recipes);
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
