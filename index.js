var recipes = {};

function updateObjectWithKeyAndValue(oldObj, key, value) {
  var newObj = Object.assign({}, oldObj);

  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(oldObj, key, value) {
  oldObj[key] = value;
  return oldObj;
}

function deleteFromObjectByKey(oldObj,key) {
  var newObj = Object.assign({}, oldObj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(oldObj,key) {
  
  delete oldObj[key];
  return oldObj;
}