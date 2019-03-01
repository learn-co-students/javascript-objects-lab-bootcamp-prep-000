var recipes = {};
  
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {};
  obj[key]= value;
  Object.assign(obj, object);
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = {};
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}


