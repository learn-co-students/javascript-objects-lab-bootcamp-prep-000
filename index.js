var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(o, key) {
  var newObj = Object.assign({}, o);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromObjectByKey(o, key) {
  delete o[key];
  return o;
}