var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes; 
}

function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({}, object);
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}