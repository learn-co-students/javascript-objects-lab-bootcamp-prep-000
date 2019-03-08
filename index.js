var recipes = {
  bakingSoda: "lots",
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
var clone = Object.assign({}, object, {[key]: value});
return clone;
}

updateObjectWithKeyAndValue(recipes, "fun", "fetti");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value});
  return object;
}

var recipeClone = Object.assign({}, recipe);

function deleteFromObjectByKey(object, key) {
 var objectClone = Object.assign({}, object);
 delete objectClone[key];
 return objectClone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}

