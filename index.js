var recipes = {};
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes[key] = value;
   return recipes;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, {key :[]})
}