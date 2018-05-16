const recipes = {};

function updateObjectWithKeyAndValue(object, newKey, newValue){
 var newRecipes = Object.assign({}, object);
 newRecipes[newKey] = newValue;
 return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var moreRecipes = Object.assign({}, object);
 delete moreRecipes[key];
 return moreRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}