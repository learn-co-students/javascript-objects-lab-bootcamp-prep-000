var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var temp = {};
  temp[key] = value;
  temp = Object.assign(temp, obj);
  return temp;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var temp = Object.assign({}, obj);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
