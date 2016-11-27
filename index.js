var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var abc = {prop: 1};
  var obj = Object.assign({prop2: 2}, abc);
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = {};
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(object, key) {
  delete recipes[key]
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var abc = {};
  var obj = Object.assign([], abc);
  return obj
}
