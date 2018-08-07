var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}
function deleteFromObjectByKey(object, key) {
 return Object.assign({}, delete object.key)
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
