var recipes = {};
function updateObjectWithKeyAndValue(object,key,value) {
  var newrecipes = Object.assign({}, object, {[key]: value});
  return newrecipes;
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object;
}
function deleteFromObjectByKey(object,key) {
  var newrecipes = Object.assign({}, object)
  delete newrecipes[key];
  return newrecipes;
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}
