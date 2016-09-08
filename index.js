var recipes = new Object();

function updateObjectWithKeyAndValue(obj, name, value) {
  var object2 = new Object(obj);
  object2[name] = value;
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, name, value) {
  obj[name] = value;
  return obj;
}

function deleteFromObjectByKey(obj, name) {
  var newObj = Object.assign({}, obj)
  delete newObj.name;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, name) {
  delete obj[name];
  return obj;
}
