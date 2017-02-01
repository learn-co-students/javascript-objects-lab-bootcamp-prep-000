var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var tmp = Object.assign({},obj);
  delete tmp[key];
  return tmp;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
