var recipes = { soup: "leek and potato" };

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({}, obj, { [key] : value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clonedObject = Object.assign ({}, object);
  delete clonedObject[key];
  return clonedObject;
}