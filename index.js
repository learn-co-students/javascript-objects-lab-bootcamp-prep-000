var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipe = new Object({key:value})
  newRecipe;
  recipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object.key = value;
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  Object.assign({}, object);
  delete object.key;
  return Object.assign({}, Object)
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}