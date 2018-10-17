var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var objclone = Object.assign({},obj);
  delete objclone[key];
  return objclone;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}