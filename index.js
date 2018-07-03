var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
   obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
 var clone = Object.assign({}, object);
 delete clone[key];
 return clone;
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key];
 return object;
}