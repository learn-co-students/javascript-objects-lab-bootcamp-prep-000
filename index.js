var recipes = new Object();

function updateObjectWithKeyAndValue(source, key, value) {
  var newObj = Object.assign({}, source);
  newObj[key]=value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(source, key, value) {
  source[key] = value;
  return source;
}

function deleteFromObjectByKey(source, key) {
  var obj = Object.assign({}, source);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(source, key) {
  delete source[key];
  return source;
}
