
var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object = { prop: 1, prop2: 2 };
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object.key = value;
return object;
}  
function deleteFromObjectByKey(object, key) {
  Object.assign({}, object, { prop2: ['2'] });
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  object.key;
  return object;
}
