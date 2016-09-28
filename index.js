var recipes = {typeof: "object"};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  var newObj = Object.assign({}, object);
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  object[key];
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  object[key];
  delete object.key;
  return object;
}
