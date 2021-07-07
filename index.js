const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
const newRecipes = Object.assign({},object);
newRecipes[key] = value;
return newRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object; 
}

function deleteFromObjectByKey(object, key) {
const newObject = Object.assign({},object);
return delete newObject[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
