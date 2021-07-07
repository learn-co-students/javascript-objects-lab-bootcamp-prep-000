var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value}); //preserve original object by updating a new object, as denoted by curly brackets
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value}); //no curly brackets included i.e. modifies original object
}
function deleteFromObjectByKey(object, key, value) {
  var newObject = Object.assign({}, object, {[key] : value}); //preserve original object by assigning object to a clone as denoted by the inclusion of curly brackets
  return delete newObject.key; //delete the key from only the clone
}
function destructivelyDeleteFromObjectByKey(object, key, value) {
  object = Object.assign(object, {[key] : value}); //delete a key/value pair from original object
  return delete object.key;
}