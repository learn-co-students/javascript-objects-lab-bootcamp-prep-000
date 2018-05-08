var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value;
return object;
}

function deleteFromObjectByKey (object, key) {
  var obj = {obj: "key"};
  var newObj = Object.assign({}, obj);
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {obj: "key"};
  delete object[key];
  return obj;
}