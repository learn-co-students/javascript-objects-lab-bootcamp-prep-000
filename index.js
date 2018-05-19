let recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var mine = Object.assign({}, object)
  delete mine[key];
  return mine;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}