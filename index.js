var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return Object.assign({}, recipes, { [key]: value });
}
function deleteFromObjectByKey(recipes, key){
  var newObject = delete recipes.key;
  return newObject;
}
function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
