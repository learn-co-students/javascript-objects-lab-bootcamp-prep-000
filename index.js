var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}
function deleteFromObjectByKey(object, key) {
  var testObj = Object.assign({}, object);
  delete testObj[key];
  return testObj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
