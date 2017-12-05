var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject1 = Object.assign({}, object, {[key]:value});
  return newObject1;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object = Object.assign(object, {[key]:value});
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObject2 = Object.assign({}, object);
  delete newObject2[key];
  return newObject2;
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}