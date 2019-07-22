var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var o2= Object.assign({}, object);
  o2[key]=value;
  return o2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var o2=Object.assign({}, object);
  delete o2[key];
  return o2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
