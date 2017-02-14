var recipes = ({});
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {object};
  var obj = Object.assign({}, object, { [key] : value});
  return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object = Object.assign(object, { [key] : value});
  return object;
}
function deleteFromObjectByKey(object, key) {
  var obj = {object};
  delete obj.key;
  return obj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
