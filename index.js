var recipes = {
  sugar: "3 teaspoons",
  butter: "1 spoon",
  cocoa: "4 spoons",
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
updateObjectWithKeyAndValue(recipes, "oil", "2 teaspoons");

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, "tumaric", "1 teaspoons")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "flour", "7 spoons");

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}
deleteFromObjectByKey(recipes, "cocoa");

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
destructivelyDeleteFromObjectByKey(recipes, "butter");
