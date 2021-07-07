var recipes = {};
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value){
  recipe[key]= value;
  return recipe;
}
function deleteFromObjectByKey(recipe, key){
var newObj = Object.assign({}, recipe)
delete newObj[key];
return newObj;
}
function destructivelyDeleteFromObjectByKey(recipe, key){
  delete recipe[key];
  return recipe;
}
