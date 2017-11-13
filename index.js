var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var o = {[key] : value};
  return Object.assign(o, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var o = Object.assign({}, object);
  delete o[key];
  return o;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}


