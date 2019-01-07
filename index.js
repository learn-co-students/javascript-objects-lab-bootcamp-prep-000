var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, recipes, { ['prop']: 1}, { ['prop2']: 2});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}
function destructivelyDeleteFromObjectByKey(object, key) { //the test will pass in the object as the first argument. You can then call it as object to refer to it
  delete object.prop;
  return object;
}