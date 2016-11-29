var recipes = {};


function updateObjectWithKeyAndValue(obj, key, value) {
  var newObject = Object.assign(obj,{[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({},object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key];
  return obj; 
}
