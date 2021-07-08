var recipes = {
  food: 'salad'
};
var newRecipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value });
}
updateObjectWithKeyAndValue(recipes, 'choco', 1 );

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'foo', 2)

function deleteFromObjectByKey(obj,key) {
  var newRecipes = Object.assign({},obj);
  delete newRecipes.key;
  return newRecipes;
}
deleteFromObjectByKey(recipes,'food');

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
destructivelyDeleteFromObjectByKey(recipes,'food');
