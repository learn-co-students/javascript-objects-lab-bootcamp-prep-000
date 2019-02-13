var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key, value) {
  let recipes = Object.assign({}, object, {[key]: value});
  delete recipes[key];
  return recipes;
}
function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete recipes[key];
  return key;
}
function destructivelyDeleteFromObjectByKey(object, key, value) {
  object[key] = value;
  return object;
}
