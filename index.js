var recipes = {
  breakfast: 'oat',
  lunch: 'egg'
}
function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, food, mcdonalds) {
  recipes[food] = mcdonalds;
  return recipes
}
function deleteFromObjectByKey(food, mcdonalds) {
  delete recipes[food];
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
