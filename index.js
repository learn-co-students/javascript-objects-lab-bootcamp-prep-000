var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var newObj = Object.assign({key:value}, recipes);
 return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object[key];
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj, {key: value})
  delete newObj.key;
}