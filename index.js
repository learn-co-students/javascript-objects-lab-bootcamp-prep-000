// Define Recipe Object
var recipes = {};

// Update Object
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

// Destructively Update Object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
 return object;
}

// Delete From Object By Key
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

// Destructively Delete From Object By Key
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}