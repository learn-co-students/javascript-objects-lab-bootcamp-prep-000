var recipes = {breakfast: 'scrambled eggs'}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign;
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}