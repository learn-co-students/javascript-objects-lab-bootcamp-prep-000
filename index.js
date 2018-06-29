var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, key, value);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}
destructivelyUpdateObjectWithKeyAndValue(recipes, key, value);

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return delete newObj["key"];
}
deleteFromObjectByKey(object, 'key');

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object["key"];
}
destructivelyDeleteFromObjectByKey(recipes, 'key');