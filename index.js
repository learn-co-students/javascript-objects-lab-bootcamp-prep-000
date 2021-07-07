var recipes = {key:'value'};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObject = Object.assign(object);
  delete newObject[key];
  return newObject;
}
