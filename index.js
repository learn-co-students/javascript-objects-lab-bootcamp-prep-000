var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]:val}); 
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var obj2 = Object.assign({}, obj);
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
