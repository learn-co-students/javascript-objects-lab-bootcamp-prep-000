var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  //this works??????!!???
  //return 0; it pass with return 0 but i presume that is not the way.
  
  var newRecipes = Object.assign({},object);
  delete newRecipes[key];
  return newRecipes;
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}