var recipes = {};

function updateObjectWithKeyAndValue(obj, property, value) {
  var newObj = Object.assign({}, obj);
  newObj[property]=value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, property, value) {
  obj[property]=value;
  return obj;
}

function deleteFromObjectByKey(obj, property) {
  var newObj = Object.assign({}, obj);
  delete newObj[property];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, property) {
  delete obj[property];
  return obj;
}
