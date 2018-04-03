var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var new_recipes = Object.assign({}, recipes);
  delete new_recipes[key];
  return new_recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}

