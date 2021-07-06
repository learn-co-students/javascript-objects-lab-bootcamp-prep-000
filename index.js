var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newrecipes = Object.assign({}, obj);
  delete newrecipes[key];
  return newrecipes;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}