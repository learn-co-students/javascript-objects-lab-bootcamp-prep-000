var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value)  {
  return Object.assign ({}, object, {[key] : value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  return Object.assign ({}, object, key)
}
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, key);
}
function destructivelyDeleteFromObjectByKey(object, key)  {
  var deletingObject = Object.assign({}, key)
  delete deletingObject.key;
  return deletingObject;
}
function destructivelyDeleteFromObjectByKey(object, key)  {
  delete object[key];
  return object;
}
