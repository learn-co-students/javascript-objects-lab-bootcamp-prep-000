var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var object2 = Object.assign({}, object, {[key]: value});
 return object2;
}
//remember to put the brackets around the key

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object[key])
  delete newObj[key];
  return newObj;
}