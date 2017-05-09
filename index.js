var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}
function deleteFromObjectByKey(object, key, value) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}
function destructivelyDeleteFromObjectByKey(dog, key, value) {
  delete dog[key];
  return dog;
}
