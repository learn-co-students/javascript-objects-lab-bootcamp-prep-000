var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value});
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object); //var newObj = Object.assign({}, object, key);
  delete newObj[key];
  return newObj;
  //delete object[key]
  //return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}